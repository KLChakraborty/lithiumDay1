const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.ObjectId

const date = new Date()
const currentDate = date.getDate() + "-"
+ (date.getMonth()+1)  + "-" 
+ date.getFullYear() + "  "  
+ date.getHours() + ":"  
+ date.getMinutes() + ":" 
+ date.getSeconds()

const orderSchema = new mongoose.Schema({

	userId: {
        type: objectId,
        required: true,
        ref: "userDoc"
    },
	productId: {
        type: objectId,
        required: true,
        ref: "productDoc"
    },
	amount: Number,
	date: {
        type: String,
        default: currentDate
    },
    isFreeAppUser: Boolean

}, { timestamps: true})

module.exports = mongoose.model("orderDoc", orderSchema)