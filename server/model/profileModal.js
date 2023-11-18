const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    //********** Login / SignUp ke time le rahe yeh sab :**********
    // name:{
    //     type: String,
    //     required: true
    // },
    // email:{
    //     type:String,
    //     required:true,
    //     unique:true
    // },
    avatar:{
        type: String,
        required: true
    },
    shortDesc:{
        type: String,
        required: true,
        maxlength: 120
    },
    aboutUs: {
        type: String,
        maxlength: 2000
    },
    experiences:[
        {
            companyName:{
                type: String,
                required: true
            }
        }
    ]
})

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;