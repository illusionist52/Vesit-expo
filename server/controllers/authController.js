const User = require('./../model/userModal');

exports.signup = async (req, res, next) => {
    try{
        const newUser = await User.create(req.body);

    res.status(200).json({
        message: "success",
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

exports.login = async (req, res, next) => {
    try{

    }
    catch(err){
        res.status(404).json({
            message: fail,
            data:{
                user : err
            }
        }); 
    }
}