const Profile = require("./../model/userModal");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const User = require("./../model/userModal");

// exports.createProfile = catchAsync(async (req, res, async) => {
//   // STEPS //
//   // 1) Get current logged-in user from Database :
//   console.log('TILL HERE OKAY')
//   const currentUser = await User.findById(req.user._id);
//   console.log( 'currentUser : \n' ,currentUser);

//   // 2) Check if the current logged-in user is same as the one fetched from the Database :
//   // if (currentUser._id.toString() !== req.user._id.toString()) {
//   //   return next(
//   //     new AppError(
//   //       "The current logged in user is not authorized to edit others profile details"
//   //     ),
//   //     400
//   //   );
//   // }

//   // 3) Fetch the '_id' from the req.user and use it in dynamic routing :
//   const id = req.params.currentUser._id;
//   console.log( 'id : ' ,id);

//   // 4) Update the profile details and save the details in the last :
//   (currentUser.avatar = req.body.avatar),
//     (currentUser.branch = req.body.branch),
//     (currentUser.collegeStartYear = req.body.collegeStartYear),
//     (currentUser.shortBio = req.body.shortBio);

//   await save();

//   // 5) Send response of update :
//   res.status(200).json({
//     success: "success",
//     data: {
//       currentUser,
//     },
//   });
// });


exports.createProfile = async (req, res, async) => {
  try{
    // STEPS //
    // 1) Get current logged-in user from Database :
    const currentUser = await User.findById(req.user._id);
    console.log( 'currentUser : \n' ,currentUser);

    // 2) Fetch the '_id' from the req.user and use it in dynamic routing :
    // const id = req.params.currentUser._id;
    // console.log( 'id : ' ,id);
  
    // 3) Update the profile details and save the details in the last :
    (currentUser.avatar = req.body.avatar),
      (currentUser.branch = req.body.branch),
      (currentUser.collegeStartYear = req.body.collegeStartYear),
      (currentUser.shortBio = req.body.shortBio);
  
    await currentUser.save();
  
    // 4) Send response of update :
    res.status(200).json({
      success: "success",
      data: {
        currentUser,
      }, 
    });
  }
    catch(err){
      console.log(err);
      res.status(400).json({
        message : 'fail',
        ERROR : err
      })
    }
};

exports.getAllProfile = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "error",
    message: "This route is not yet defined",
  });
});
