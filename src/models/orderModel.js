const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({

	userId: {
        type: objectId,
        ref: "userDoc"
    },
	productId: {
        type: objectId,
        ref: productDoc
    },
	amount: Number,
	date: {
        type: String,
        default: 03/11/2022
    }

}, { timestamps: true})

module.exports = mongoose.model("orderDoc", orderSchema)
