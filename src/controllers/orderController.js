const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")



const createOrder = async function(req, res){

    const body2 = req.body
    const isFreeAppUser = req.headers["isfreeappuser"]
    if( isFreeAppUser == "true" ){
    const savedData2 = await orderModel.create(body2)
   return res.send({msg: savedData2})
}else {
let prices = await productModel.findOne({_id: body2.productId}).select({price: 1, _id: 0}) 
let balances = await userModel.findOne({_id: body2.userId}).select({balance: 1, _id: 0})
if(balances.balance > prices.price){
    const savedData3 = await userModel.findOneAndUpdate({_id: body2.userId}, {$set: {balance: balances.balance-prices.price}}, {new: true})
    const savedData4 = await orderModel.create(body2)
    const savedData5 = await orderModel.findOneAndUpdate({body2}, {$set: {amount: prices.price, isFreeAppUser: false}}, {new: true})
   return res.send({msg: savedData5})
}else{
    return res.send("Balance is low")
}

}}

module.exports.createOrder = createOrder