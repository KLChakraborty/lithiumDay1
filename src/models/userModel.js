const mongoose = require("mongoose")

const userDocSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["male", "female", "others"],
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    age: {
        type: Number,
        required: true
    },
    posts: {
        type: [],
        default: []
    }
    
    }, {timestamps: true})

    module.exports = mongoose.model("fbProfile", userDocSchema)


