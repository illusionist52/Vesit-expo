const Profile = require("./../model/userModal");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const User = require("./../model/userModal");

const multer = require('multer')
const uploadMiddleware = multer({ dest: 'uploads/'})

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.createProfile = async (req, res, next) => {
  try {
    // STEPS //
    // 1) Get current logged-in user from Database :
    const profileUser = await User.findById(req.user._id);
    console.log("profileUser : \n", profileUser);

    const { name, email, password, confirmPassword, role, avatar, branch, collegeStartYear, shortBio, experience, skills,  } = req.body;
    // Check if all required fields are present

    // if ( !branch || !collegeStartYear || !shortBio ) {
    //   return next(new AppError('Incomplete required Profile details'), 400);
    // }

    if (name || email || password || confirmPassword || role) {
      return next(new AppError('Cannot update login credentials in Profile updations'), 400);
    }

    // 2) Update the profile details and save the details in the last :
    (profileUser.avatar = req.body.avatar),
    (profileUser.portfolioWebsite = req.body.portfolioWebsite),
    (profileUser.branch = req.body.branch),
    (profileUser.collegeStartYear = req.body.collegeStartYear),
    (profileUser.shortBio = req.body.shortBio),
    (profileUser.longDesc = req.body.longDesc);
    (profileUser.skills = req.body.skills);
    (profileUser.experience = req.body.experience);
    (profileUser.achievements = req.body.achievements);
    (profileUser.projects = req.body.projects);

    await profileUser.save({validateModifiedOnly: true});

    // 3) Send response of update :
    res.status(200).json({
      success: "success",
      data: {
        profileUser,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "fail",
      ERROR: err,
    });
  }
};

exports.updateProfile = catchAsync(async (req, res, next) => {
  // 1) Don't allow for password updates :
  // if (req.body.name || req.body.confirmPassword)
  //   return next(
  //     new AppError("This route is not defined for password updates", 400)
  //   );

  // 2) Update required Data :
  const filteredFields = filterObj(req.body, "avatar", "portfolio", "branch", "collegeStartYear", "shortBio", "longDesc", "skills", "experience", "achievements", "projects");

  const updateProfile = await User.findByIdAndUpdate(
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
      updateProfile,
    },
  });
});