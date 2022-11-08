const mongoose = require("mongoose")

const userSchema1 = new mongoose.Schema({
firstName: {
    type: String,
    required: true
},
lastName: {
    type: String,
    required: true
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
mobile: {
    type: String,
    unique: true,
},
age: {
    type: Number,
    required: true,
},
gender: {
    type: String,
    enum: ["male", "female", "others"],
    required: true
},
posts: {
    type: [],
    default: []
},
isDeleted: {
    type: Boolean,
    default: false
},
}, { timestamps: true })


module.exports = mongoose.model("socialprofile", userSchema1)