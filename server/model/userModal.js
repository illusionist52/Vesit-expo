const crypto = require('crypto');
const mongoose = require('mongoose');
// const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your EMail ID'],
    unique: true,
    validate: {
      validator: function (el) {
        const emailCheck = /^[^\s@]+@ves\.ac\.in$/;
        const result = el.match(emailCheck);
        return result;
      },
      message: 'Please enter a VALID COLLEGE Email ID',
    },
  },
  password: {
    type: String,
    required: [true, 'Please provide your password'],
    minlength: 8,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
    },
    message: 'Password and Confirm Password do not match!',
  },
  passwordChangedAt:{
    type: Date
  }
});

// Checks if the USER password and saved are password are SAME OR NOT :
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};


userSchema.methods.changePasswordAfter = function(JWTTimeStamp){
  if(this.passwordChangedAt){
    const userTime = this.passwordChangedAt.getTime() / 1000; 
    console.log( "Time stamp : " , userTime, JWTTimeStamp);

    return userTime > JWTTimeStamp;
  }

  return false;
}


userSchema.methods.createPasswordResetToken = function(){
  const resetToken = crypto.randomBytes(32).toString('hex');
}


// DEELTE confirmPassword and HASHES the password :
userSchema.pre('save', async function (next) {
  // ONLY runs if password is modified :
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12 :
  this.password = await bcrypt.hash(this.password, 12);

  // Delete the confirm password from saving into the Database :
  this.confirmPassword = undefined;
});

const User = mongoose.model('User', userSchema);

module.exports = User;
