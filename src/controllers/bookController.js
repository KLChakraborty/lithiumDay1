const bookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    const { author } = req.body
    if (!author) {
        return res.send("author detail is required")
    }
    const { publisher } = req.body
    if (!publisher) {
        return res.send("publisher detail is required")
    }
    const savedData2 = await bookModel.create(req.body)
    return res.send({ msg: savedData2 })
}

const findBook = async function (req, res) {
    const savedData3 = await bookModel.find().populate("author").populate("publisher")
   return res.send({ msg: savedData3 })
}

module.exports.createBook = createBook
module.exports.findBook = findBook