const User = require("./../model/userModal");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    length: users.length,
    data: {
      users,
    },
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Don't allow for password updates :
  if (req.body.password || req.body.confirmPassword)
    return next(
      new AppError("This route is not defined for password updates", 400)
    );

  // 2) Update required Data :
  const filteredFields = filterObj(req.body, "name", "email");

  
  const updateUser = await User.findByIdAndUpdate(
    req.user._id,
    filteredFields,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    data: {
      updateUser,
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
