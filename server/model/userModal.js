const crypto = require("crypto");
const mongoose = require("mongoose");
// const validator = require('validator');
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your EMail ID"],
    unique: true,
    validate: {
      validator: function (el) {
        const emailCheck = /^[^\s@]+@ves\.ac\.in$/;
        const result = el.match(emailCheck);
        return result;
      },
      message: "Please enter a VALID COLLEGE Email ID",
    },
  },
  password: {
    type: String,
    required: [true, "Please provide your password"],
    minlength: 8,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
    },
    message: "Password and Confirm Password do not match!",
  },
  role: {
    type: String,
    default: "user",
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },

  // PROFILE MODEL EMBEDDING STARTS :
  avatar: {
    type: String,
    default: "/images/default-avatar.png",
  },
  portfolioWebsite: {
    type: String,
    default: null,
  },
  branch: {
    type: Number,
    required: false,
  },
  collegeStartYear: {
    type: Date,
    required: false,
  },
  shortBio: {
    type: String,
    minlength: 20,
    maxlength: 220,
    required: false,
  },
  longDesc: {
    type: String,
    minlength: 200,
    maxlength: 2600,
    default: null,
  },
  skills: [
    {
      type: String,
      default: null,
    },
  ],
  experience: [
    {
      companyName: {
        type: String,
        required: [true, "Please mention your Company Name"],
        maxlength: 50,
      },
      position: {
        type: String,
        required: [true, "Mention the Position of your Job/Internship"],
        maxlength: 100,
      },
      fromDate: {
        type: Date,
        required: true,
      },
      toDate: {
        type: Date,
        required: true,
      },
      workType: {
        type: String,
        enum: ["Job", "Internship"],
        required: [true, "Please mention the type of work you have done."],
      },
    },
  ],
  achievements: [
    {
      type: String,
      default: null,
    },
  ],
  projects: [
    {
      projectTitle: {
        type: String,
        maxlength: 100,
      },
      projectDesc: {
        type: String,
        maxlength: 200,
      },
      techStackUsed: {
        type: String,
        maxlength: 100,
      },
    },
  ],
});

// Checks if the USER password and saved are password are SAME OR NOT :
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changePasswordAfter = function (JWTTimeStamp) {
  if (this.passwordChangedAt) {
    const userTime = this.passwordChangedAt.getTime() / 1000;
    // console.log('Time stamp : ', userTime, JWTTimeStamp);

    return userTime > JWTTimeStamp;
  }

  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

// DOCUMENT MIDDLEWARES //
userSchema.pre("save", function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password" || this.isNew)) {
    next();
  }

  this.passwordChangedAt = Date.now() - 2000;

  next();
});

// DELETE confirmPassword and HASHES the password :
userSchema.pre("save", async function (next) {
  // ONLY runs if password is modified :
  if (!this.isModified("password")) return next();

  // Hash the password with cost of 12 :
  this.password = await bcrypt.hash(this.password, 12);

  // Delete the confirm password from saving into the Database :
  this.confirmPassword = undefined;
});

// FILTERS TO ONLY SHOW {'active': true} users in the frontEnd :
userSchema.pre(/find$/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

// Validate the Profile details after saving the LOGIN credentials :
userSchema.pre('save', function (next) {
  if (
    this.isModified('branch') ||
    this.isModified('collegeStartYear') ||
    this.isModified('shortBio') ||
    this.isModified('confirmPassword')
  ) {
    if (!this.shortBio) {
      this.invalidate('shortBio', 'Short Bio is required for profile completion.');
    }
    if (!this.avatar) {
      this.invalidate('avatar', 'Avatar is required for profile completion.');
    }
    if (!this.collegeStartYear) {
      this.invalidate('collegeStartYear', 'College Start Year is required for profile completion.');
    }
  }

  next();
});


const User = mongoose.model("User", userSchema);

module.exports = User;
