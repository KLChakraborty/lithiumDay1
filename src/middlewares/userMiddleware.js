const moment = require("moment")
const ip = require("ip")
const path = require("path")


const midd = function (req, res, next) {
    const y = req.ip
    const x = moment().format('YYYY MM DD h:mm:ss')
    const z = req.path
console.log(x, y, z)
next()
}

module.exports.midd = midd

