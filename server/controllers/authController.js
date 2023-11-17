const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("./../model/userModal");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  // 1) Check if the user has all the fields filled :
  const { name, email, password, confirmPassword, passwordChangedAt } =
    req.body;
  if (!name || !email || !password || !confirmPassword || !passwordChangedAt) {
    return next(new AppError("Please fill all fields", 400));
  }

  // 2) Check for existing user with same email address :
  const alreadyExistUser = await User.findOne({ email });
  if (alreadyExistUser) {
    return next(new AppError("Email is taken! Please login instead", 400));
  }

  // 3) If above both checks are passed, then start the process of creating new user :
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    passwordChangedAt: req.body.passwordChangedAt,
  });

  //4) Creating JWT token for the authorized user :
  const token = signToken(newUser._id);

  //5) Saving the imformation in the database :
  res.status(200).json({
    message: "success",
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) If email and password exists :
  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  // 2) Verify password or email is same or not :
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Email or Password is incorrect", 401));
  }

  // 3) Send token, cuz first two steps completed 😊🫂 
  const token = signToken(user._id);
  res.status(200).json({
    message: "Sign up successful",
    token,
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  //1) Getting the token and check if it's there.
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(
      new AppError("You are not logged in! Please login to get access", 401)
    );
  }

  //2) Verification the token --> ErrorController of prod mode not working
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  // console.log(decoded);

  //3) If user still exists.
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(new AppError("User does not exist", 401));
  }

  //4) If user changes password after JWT_TOKEN.
  if (currentUser.changePasswordAfter(decoded.iat)) {
    return next(
      new AppError("Your password has been changed. Please log in again")
    );
  }

  // GRANT ACCESS TO PROTECTED ROUTES : 
  req.user = currentUser;
  next();
});

exports.forgotPassword =  catchAsync(async(req, res, next) => {

  //1) Get user based on Posted email :
  const user = await User.findOne({email : req.body.email});
  if(!user){
    return next(new AppError('User not found with the provided EMail ID', 404));
  }

  //2) Generate the random reset token :

  //3) Send it to user's email : 

})

exports.resetPassword = (req, res, next) => {}