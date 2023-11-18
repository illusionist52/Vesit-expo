const Profile = require('./../model/profileModal');
const catchAsync = require('./../utils/catchAsync');

exports.getAllProfile = catchAsync( async (req, res, next) => {
    res.status(200).json({
        status: 'error',
        message: 'This route is not yet defined'
    })
})