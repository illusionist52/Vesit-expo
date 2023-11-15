const jwt = require('jsonwebtoken');
const User = require('./../model/userModal');

exports.signup = async (req, res, next) => {
    try{
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
        });

        // JWT IMPLEMENTATION : 
        const token = jwt.sign( { id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        } )

        res.status(200).json({
            message: "success",
            token,
            data:{
                user : newUser
            }
        });
    }
    catch(err){
        res.status(404).json({
            message: "fail",
            data:{
                user : err
            }
        });
    }
};

exports.login = (req, res, next) => {
    try{
        const email = req.body.email;
        const password = req.body.password;

        console.log(email, password);

        // 1) If email and password exists : 
        if( !email || !password ){
            return res.status(400).json({
                message : "Please provide both an email address and a password"
            });
        }

        // 2) Verify password or email is same or not : 
        // const user = User.findOne({ email }).select('+password');

        // if(user._id === )


        // 3) Send token, cuz first two steps completed 😊🫂
        const token = '';
        res.status(200).json({
            message: 'Sign up successful',
            token
        })
    }
    catch(err){
        res.status(500).json({
            message: "fail",
            error: err
        });
    }
}