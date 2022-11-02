const midd = function (req, res, next) {
    const y = req.ip
    const date = new Date()
const currentDate = date.getDate() + "-"
+ (date.getMonth()+1)  + "-" 
+ date.getFullYear() + "  "  
+ date.getHours() + ":"  
+ date.getMinutes() + ":" 
+ date.getSeconds();

    const z = req.path
console.log(currentDate, y, z)
next()
}

module.exports.midd = midd

