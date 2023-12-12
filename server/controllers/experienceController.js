const Experience = require("./../model/experienceModal");
const multer = require("multer");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const fs = require('fs');

const uploadMiddleware = multer({ dest: "./uploads/" });

exports.uploadFile = uploadMiddleware.single('coverImage');

exports.createPost = catchAsync(async (req, res, next) => {

  // if(!req.file){
  //   return next(new AppError('No file uploaded'), 404);
  // }

  console.log("REQ FILE :", req.file);
  const reqFileData = {...req.file}

  const {originalname, path} = req.file;
  const ext = originalname.split('.')[1]

  console.log(ext);
  
  const newPath = (path+'.'+ext);
  fs.renameSync(path, newPath);

  console.log(reqFileData);
  
  const { title, summary, coverImage = newPath, mainContent } = req.body;

  if (!title || !summary || !coverImage || !mainContent) {
    return next(new AppError("Please provide all required fields", 400));
  }

  const ExperienceData = await Experience.create({
    title, summary, coverImage: newPath, mainContent
  });

  console.log(ExperienceData);

  res.status(200).json({
    status: "success",
    message: "Post has been created",
    data: {
        ExperienceData : ExperienceData
    },
    files : req.file
  });
});

exports.getPost = (req, res) => {};

// const Experience = require("./../model/experienceModal");
// const multer = require("multer");
// const catchAsync = require("./../utils/catchAsync");
// const AppError = require("./../utils/appError");

// const uploadMiddleware = multer({ dest: "uploads/" });

// exports.createPost = catchAsync(async (req, res, next) => {
//   uploadMiddleware.single('coverImage')(req, res, async function (err) {
//     if (err instanceof multer.MulterError) {
//       return next(new AppError('File upload error', 400));
//     } else if (err) {
//       return next(new AppError('An unexpected error occurred', 500));
//     }

//     console.log(req.file);
    
//     const { title, summary, mainContent } = req.body;
//     const coverImage = req.file.filename; // Assuming multer provides the filename

//     if (!title || !summary || !coverImage || !mainContent) {
//       return next(new AppError("Please provide all required fields", 400));
//     }

//     const experienceData = await Experience.create({
//       title, summary, coverImage, mainContent
//     });

//     console.log(experienceData);

//     res.status(200).json({
//       status: "success",
//       message: "Post has been created",
//       data: {
//         experienceData: experienceData
//       },
//       file: req.file // Assuming you want to send the uploaded file information back
//     });
//   });
// });
