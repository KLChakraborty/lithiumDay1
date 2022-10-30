const express = require('express');
const router = express.Router();

const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")
const publisherModel = require("../models/publisherModel")



const authorController = require("../controllers/authorController")
const publisherController = require("../controllers/publisherController")
const bookController = require("../controllers/bookController")

router.post("/createAuthor", authorController.createAuthor)

router.post("/createPublisher", publisherController.createPublisher)

router.post("/createBook", bookController.createBook)

router.get("/findBook", bookController.findBook)

router.put("/updateBook", async function (req, res) {

    const savedData4 = await publisherModel.find({ name: ["Penguin", "HarperCollins"] }).select({ _id: 1 })

    const savedData5 = await bookModel.updateMany({ publisher: savedData4 }, { $set: { isHardCover: true } }, { new: true })
    res.send({ msg: savedData5 })

})

router.put("/updateBook1", async function (req, res) {

    const savedData6 = await authorModel.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })
    const savedData7 = await bookModel.updateMany({ author: savedData6 }, { $inc: { price: +10 } }, { new: true })
    res.send({ msg: savedData7 })

})

module.exports = router