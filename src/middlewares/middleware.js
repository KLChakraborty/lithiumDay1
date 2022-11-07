const jwt = require("jsonwebtoken")


const midd = function(req, res, next){

    const token = req.headers["x-auth-token"]
    if(!token){
        return res.send("This field is mandatory")
    }
const decodeToken = jwt.verify(token, "function lithium cohort")
if(!decodeToken){
    return res.send({status: false, msg: "Token is invalid"})
}

next()
}

module.exports.midd = midd