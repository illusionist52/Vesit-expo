const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please tell us your name!']
    },
    email:{
        type:String,
        require: [true, 'Please provide your EMail ID'],
        unique: true,
        validator: [validator.isEmail, 'Please provide a valid Email ID']
    },
    password:{
        type: String,
        required: [true, 'Please provide your password'],
        minlength: 8
    },
    confirm_password:{
        type: String,
        required: [true, 'Please confirm your password']
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;