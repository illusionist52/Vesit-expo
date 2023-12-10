const Experience = require("./../model/experienceModal");
const multer = require("multer");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.createPost = catchAsync(async (req, res, next) => {
  const { title, summary, coverImage, mainContent } = req.body;

  if (!title || !summary || !coverImage || !mainContent) {
    return next(new AppError("Please provide all required fields", 400));
  }

  const ExperienceData = await Experience.create({
    title, summary, coverImage, mainContent
  });

  console.log(ExperienceData);

  res.status(200).json({
    status: "success",
    message: "Post has been created",
    data: {
        ExperienceData : ExperienceData
    }
  });
});

exports.getPost = (req, res) => {};
