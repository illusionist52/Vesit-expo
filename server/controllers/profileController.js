const Profile = require("./../model/userModal");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const User = require("./../model/userModal");

exports.createProfile = catchAsync(async (req, res, async) => {
  const {id} = req.user;

  const Profile = await User.create(req.body);

  console.log(req.params)
  console.log(req.user);
  const user = req.user;

  res.status(200).json({
    success: 'Success',
    message: 'Profile created successfully',
    data: {
      id: id,
      user : user,
      Profile : Profile
    }
  })
});

exports.getAllProfile = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "error",
    message: "This route is not yet defined",
  });
});
