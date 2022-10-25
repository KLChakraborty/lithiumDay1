const UserModel= require("../models/userModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData

const x = async function (req, res) {
    let abc = req.body
    let def = await UserModel.create(abc)
    res.send({msg: def})
}

const y = async function (req, res) {
    
    let ABC = await UserModel.find()
    res.send({msg: ABC})
}

module.exports.X= x
module.exports.Y= y