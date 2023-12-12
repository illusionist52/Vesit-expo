const mongoose = require('mongoose')
const User = require('./userModal');

const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String, 
        require: true
    },
    coverImage: {
        type: String,
        required: true
    },
    mainContent: {
        type: String,
        required: true
    },
    userId:[
        {
            type: mongoose.Schema.ObjectId,
            ref: User
        }
    ]
},{
    timestamps: true,
})

const Experience = mongoose.model('Experience', experienceSchema)

module.exports = Experience;