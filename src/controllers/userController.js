const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")



const createUser = async function (req, res){
try {
    const { firstName, lastName, emailId, password, mobile, age, gender } = req.body
if( !firstName || !lastName || !emailId || !password || !mobile || !age || !gender){
    return res.status(400).send({msg: "Enter required fields to create account"})
}
const savedData = await userModel.findOne({emailId})
if(savedData){
    return res.status(400).send({msg: "Enter unique email to create account", status: false})
}
const savedData1 = await userModel.findOne({mobile})
if(savedData1){
    return res.status(400).send({msg: "Enter unique mobile to create account", status: false})
}
const savedData2 = await userModel.create({ firstName, lastName, emailId, password, mobile, age, gender })
return res.status(201).send({msg: savedData2, status: true})
} catch(error){
    res.status(500).send({message: error.message, status: false})
}
}



const loginUser = async function (req, res){
try{
    const { emailId, password } = req.body
    if( !emailId || !password ){
        return res.status(400).send({msg: "Enter required fields to login account", status: false})
    }
    const savedData3 = await userModel.findOne({emailId, password})
    if(!savedData3){
        return res.status(404).send({msg: "Enter valid login details", status: false})
    }
    const encodedToken = jwt.sign({userId: savedData3._id}, "hey there")
    res.setHeader("x-auth-token", encodedToken)
    return res.status(200).send({msg: "you are logged in now", status: true})
}catch(error){
    res.status(500).send({message: error.message, status: false})
}
    }




const findUser = async function (req, res){
   try{ const userToBeModified = req.userToBeModified
    const savedData4 = await userModel.findById(userToBeModified)
    return res.status(200).send({msg: savedData4, status: true})
} catch(error) {
    res.status(500).send({message: error.message, status: false})
}
}





const updateUser = async function (req, res){
 try {
        const userToBeModified = req.userToBeModified
    const savedData5 = await userModel.findById(userToBeModified)
const body = req.body
if(!Object.keys(body).length > 0){
    return res.status(400).send({msg: "Enter the criteria to update", status: false})
}
const message = body.message
if(!message){
    return res.status(400).send({msg: "message attribute is missing", status: false})
}
    const updatedPost = savedData5.posts
    updatedPost.push(message)
    const savedData6 = await userModel.findOneAndUpdate({_id: userToBeModified}, {$set: {posts: updatedPost}}, {new: true})
    return res.status(200).send({msg: savedData6, status: true})
} catch(error){
    res.status(500).send({message: error.message, status: false})
}
}





const deleteUser = async function (req, res){
  try { 
    const userToBeModified = req.userToBeModified
    const savedData8 = await userModel.findOneAndUpdate({_id: userToBeModified}, {$set: {isDeleted: true}}, {new: true})
    return res.status(200).send({msg: "Account Deleted", status: true})
} catch(error){
    res.status(500).send({message: error.message, status: false})
}
}




module.exports = { createUser, loginUser, findUser, updateUser, deleteUser }