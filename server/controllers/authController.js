const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('./../model/userModal');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const sendEmail = require('./../utils/email');
const crypto = require('crypto');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  }
  if(process.env.NODE_ENV === 'production') cookie.secure = true;

  // cookie options
  res.cookie('jwt', token, cookieOptions);

  // Remove Password from the respone body : 
  user.password = undefined;

  //5) Saving the imformation in the database :
  res.status(statusCode).json({
    message: 'success',
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  // 1) Check if the user has all the fields filled :
  const {
    name,
    email,
    password,
    confirmPassword,
    passwordChangedAt,
    PasswordResetToken,
  } = req.body;
  if (!name || !email || !password || !confirmPassword) {
    return next(new AppError('Please fill all fields', 400));
  }

  // 2) Check for existing user with same email address :
  const alreadyExistUser = await User.findOne({ email });
  if (alreadyExistUser) {
    return next(new AppError('Email is taken! Please login instead', 400));
  }

  // 3) If above both checks are passed, then start the process of creating new user :
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    passwordChangedAt,
    PasswordResetToken: req.body.PasswordResetToken,
  });

  //4) Creating JWT token for the authorized user :
  //5) Saving the imformation in the database :
  createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) If email and password exists :
  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400));
  }

  // 2) Verify password or email is same or not :
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Email or Password is incorrect', 401));
  }

  // 3) Send token, cuz first two steps completed 😊🫂
  createSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  //1) Getting the token and check if it's there.
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(
      new AppError('You are not logged in! Please login to get access', 401)
    );
  }

  //2) Verification the token --> ErrorController of prod mode not working
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //3) If user still exists.
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(new AppError('User does not exist', 401));
  }

  //4) If user changes password after JWT_TOKEN.
  if (currentUser.changePasswordAfter(decoded.iat)) {
    return next(
      new AppError('Your password has been changed. Please log in again')
    );
  }

  // GRANT ACCESS TO PROTECTED ROUTES :
  req.user = currentUser;
  next();
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  //1) Get user based on Posted email :
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError('User not found with the provided EMail ID', 404));
  }

  //2) Generate the random reset token :
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  //3) Send it to user's email :
  const resetURL = `${req.protocol}://${req.get(
    'host'
  )}/api/v1/users/resetPassword/${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to:${resetURL}.\nIf you didn't forget your password, please ignore this email`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Password Reset Token (Valid for 10 minutes only)',
      name: 'Password Reset Mail',
      message: `${message}`,
    });

    return res.status(200).json({
      status: 'success',
      message: 'A mail is sent to your Email address.',
    });
  } catch (err) {
    (user.passwordResetToken = undefined),
      (user.passwordResetExpires = undefined),
      user.save({ validateBeforeSave: false });
  }

  return next(
    new AppError('There was an error sending the Email. Try again!'),
    500
  );
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // STEPS //

  // 1) Get user based on Token :
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // console.log(user);

  // 2) Set new password, if token not EXPIRED :
  // +
  // 3) Update changed Password at property & Login user :

  if (!user) {
    return next(new AppError('Token is invalid or expired', 404));
  }
  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  (user.passwordResetToken = undefined),
    (user.passwordResetExpires = undefined);
  passwordChangedAt = Date.now();
  user.save();

  // 4) Log the user in, send JWT :
  createSendToken(user, 200, res);
});

// UPDATE PASSWORD :
exports.updatePassword = catchAsync(async (req, res, next) => {
  // STEPS //
  // 1) Get current logged-in user from collection :
  const user = await User.findById(req.user._id).select('+password');
  console.log(user);

  // 2) Check if the password is correct :
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError('Incorrect Password! Please try again', 401));
  }

  // 3) Update the password :
  (user.password = req.body.password),
    (user.confirmPassword = req.body.confirmPassword),
    await user.save();

  // 4) Send JSON Web token :
  createSendToken(user, 200, res);
});
