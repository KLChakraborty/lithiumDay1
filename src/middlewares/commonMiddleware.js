const mongoose = require("mongoose")
const objectId = mongoose.isValidObjectId


const middleware = function (req, res, next){

    const isFreeAppUser = req.headers["isfreeappuser"]
if(!isFreeAppUser){
    return res.send("The request is missing a mandatory header")
}
next()
}

const middleware1 = function(req, res, next){

    const { userId, productId } = req.body

    if(!userId){
       return res.send("UserId is required")
    }else if(!productId){
       return res.send("ProductId is required")
    }

    if(!objectId(userId)){
      return res.send("Enter valid UserId")
    } else if(!objectId(productId)){
      return res.send("Enter valid ProductId")
    }

   next()
    
}

module.exports.middleware = middleware
module.exports.middleware1 = middleware1