const express = require('express');
const router = express.Router();
const a = require("../logger/logger")
const b = require("../util/helper")
const c = require("../validator/formatter")
const d = require("lodash")

router.get('/test-me', function (req, res) {
    console.log(a.welcome())

    console.log(b.printDate())
    console.log(b.printMonth())
    console.log(b.getBatchInfo())

    console.log(c.trim())
    console.log(c.toLowerCase())
    console.log(c.toUpperCase())

    const arr1 = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"]
    console.log(d.chunk(arr1, 4))
    const arr2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    console.log(d.tail(arr2))
    const arr3 = [1, 2, 3]
    const arr4 = [5, 6, 7]
    const arr5 = [1, 5, 8]
    const arr6 = [5, 9, 10]
    const arr7 = [4, 8, 7]
    console.log(d.union(arr3, arr4, arr5, arr6, arr7))
    const arr8 = [["horror", "The Shining"], ["drama", "Titanic"], ["thriller", "Shutter Island"], ["fantasy", "Pans Labyrinth"]]
    console.log(d.fromPairs(arr8))


    res.send('My first ever api!')
});

module.exports = router;

