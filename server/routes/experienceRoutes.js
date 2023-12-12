const express = require("express");
const router = express.Router();

const experienceController = require("./../controllers/experienceController");
const authController = require("./../controllers/authController");

router
    .route("/post")
    .get(authController.protect, experienceController.getPost)
    .post(authController.protect, experienceController.uploadFile, experienceController.createPost);

module.exports = router;