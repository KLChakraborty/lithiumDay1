const bookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({ msg: savedData })
}

const bookList = async function (req, res) {
    let savedData0 = await bookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg0: savedData0 })
}

const getBooksInYear = async function (req, res) {
    const x = req.body.year;
    let savedData1 = await bookModel.find({year: x}).count();
    res.send({ msg1: savedData1 });
}

const getParticularBooks = async function (req, res) {
    const y = req.body;
    let savedData2 = await bookModel.find(y);
    res.send({ msg2: savedData2 });
}

const getXINRBooks = async function (req, res) {
    let savedData3 = await bookModel.find({ 'price.indian': { $in: ["Rs.100", "Rs.200", "Rs.500"]}})
    res.send({ msg3: savedData3 })
}

const getRandomBooks = async function (req, res) {
    let savedData4 = await bookModel.find({ $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }] }).count()
    res.send({ msg4: savedData4 })
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks


