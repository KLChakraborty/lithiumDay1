const publisherModel = require("../models/publisherModel")

const createPublisher = async function (req, res) {
    const body = req.body
    const savedData = await publisherModel.create(body)
    return res.send({msg: savedData})
}

module.exports.createPublisher = createPublisher