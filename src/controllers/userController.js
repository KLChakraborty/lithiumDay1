const userModel = require("../models/userModel")

const createUser = async function(req, res){

    const body = req.body
    const savedData = await userModel.create(body)
    res.send({msg: savedData})
}

module.exports.createUser = createUser