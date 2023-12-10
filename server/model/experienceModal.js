const mongoose = require('mongoose')

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
    }
},{
    timestamps: true,
})

const Experience = mongoose.model('Experience', experienceSchema)

module.exports = Experience;