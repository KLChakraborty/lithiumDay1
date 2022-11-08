const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const objectId = mongoose.isValidObjectId


const authenticate = function(req, res, next){
    try {
        const token = req.headers["x-auth-token"]
    if(!token){
        return res.status(404).send({msg: "Token is not present", status: false})
    }
    const decodedToken = jwt.verify(token, "hey there")
    if(!decodedToken){
        return res.status(401).send({msg: "Invalid token", status: false})
    }
    const userToBeModified = req.params.id
        if(!userToBeModified){
            return res.status(400).send({msg: "Enter UserId", status: true})
        }
        if(!objectId(userToBeModified)){
           return res.status(400).send({msg: "Invalid UserId"})
        }

        req.decodedToken = decodedToken
        req.userToBeModified = userToBeModified
        next()
    } catch(error){
       return res.status(500).send({message: error.message, status: false})
    }
    }


    const authorise = function(req, res, next){
try {
    const decodedToken = req.decodedToken
const userToBeModified = req.userToBeModified
        const userLoggedIn = decodedToken.userId
    if (userToBeModified != userLoggedIn.toString()) {
        return res.status(401).send({ msg: "User logged is not allowed to modify the requested users data", status: false })
    }
    req.userToBeModified = userToBeModified
    next()
}catch(error){
    res.status(500).send({message: error.message, status: false})
}
    }

    module.exports = { authenticate, authorise }