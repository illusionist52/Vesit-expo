const express = require('express');
const router = express.Router();

const authController = require('./../controllers/authController');
const profileController = require('./../controllers/profileController');

router.post('/createProfile/:id', authController.protect, profileController.createProfile);


module.exports = router;
