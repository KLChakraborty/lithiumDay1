const midd = function (req, res, next) {
    const y = req.ip
    // const x = moment().format('YYYY MM DD h:mm:ss')
    const z = req.path
console.log(y, z)
next()
}

module.exports.midd = midd

