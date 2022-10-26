const mongoose = require("mongoose")

const bookModel = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    price: {
        indian: String,
        european: String
    },
    year: {
        type: Number,
        default: 2021
    },
    tags: [String],
    authorName: String,
    totalPages: Number,
    stockAvailable: Boolean
}, { timestamps: true }
)

module.exports = mongoose.model('Book', bookModel)