const jwt = require("jsonwebtoken")


const authenticate = function (req, res, next) {
    const token = req.headers["x-auth-token"]
    if (!token) {
        return res.send({ msg: "Token is absent", status: false })
    }
    const decodeToken = jwt.verify(token, "Hello there")
    if (!decodeToken) {
        return res.send({ msg: "Token is invalid", status: false })
    }
    req.decodeToken = decodeToken
    next()
}


const authorise = function (req, res, next) {
    const decodeToken = req.decodeToken 
    let userToBeModified = req.params.id
    let userLoggedIn = decodeToken.user
    if (userToBeModified != userLoggedIn) {
        return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
    }
    req.userToBeModified = userToBeModified
    next()
}


module.exports = { authenticate, authorise }