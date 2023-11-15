const User = require("./../model/userModal");
const catchAsync = require("./../utils/catchAsync");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: "'success",
    data: {
      users,
    },
  });
});

exports.createUser = catchAsync((req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
});

exports.getUser = catchAsync((req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
});

exports.updateUser = catchAsync((req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
});

exports.deleteUser = catchAsync((req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
});
