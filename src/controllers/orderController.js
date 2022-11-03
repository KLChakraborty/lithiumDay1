const orderModel = require("../models/orderModel")

const createOrder = async function(req, res){

    const body2 = req.body
    const savedData2 = await orderModel.create(body2)
    res.send({msg: savedData2})
}

module.exports.createOrder = createOrder