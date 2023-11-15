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
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  // JWT IMPLEMENTATION :
  const token = signToken(newUser._id);

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
