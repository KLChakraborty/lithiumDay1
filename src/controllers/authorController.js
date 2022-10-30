const authorModel = require("../models/authorModel")

const createAuthor = async function(req, res){
    const body1 = req.body
    const savedData1 = await authorModel.create(body1)
   return res.send({msg: savedData1})
}

module.exports.createAuthor = createAuthor