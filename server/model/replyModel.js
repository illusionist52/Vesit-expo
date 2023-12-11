const mongoose = require("mongoose");
const User = require("./userModal");

const Reply = mongoose.Schema({
    replies: [
        {
           postName: {
                type: mongoose.Schema.ObjectId,
                ref: Post
           },
           CONTENT: {
                type: String
           }
        }
    ]
})

// FLOW OF DATA REFERENCING //
// USER --> POST --> COMMENT --> REPLIES

// WHAT IS REACT?  --> POST
// |     ---> React is a Js library.... Usmaan
// -->  React is ... Nilanchal