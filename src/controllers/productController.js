const productModel = require("../models/productModel")

const createProduct = async function(req, res){

    const body1 = req.body
    const savedData1 = await productModel.create(body1)
   return res.send({msg: savedData1})
}

module.exports.createProduct = createProduct