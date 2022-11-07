const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")

const createUser = async function (req, res) {
  const { firstName, lastName, mobile, emailId, password, gender, age } = req.body
  if (!firstName || !lastName || !mobile || !password || !emailId || !gender || !age) {
    return res.send({ msg: "These are required fileds", status: false })
  }
  const data = await userModel.findOne(req.body)
  if (data) {
    res.send({ msg: "Please enter unique data" })
  }
  const savedData = await userModel.create({ firstName, lastName, mobile, emailId, password, gender, age })
  return res.send({ msg: savedData, status: true })
}






const loginUser = async function (req, res) {
  const { emailId, password } = req.body
  const savedData1 = await userModel.findOne({ emailId, password })
  if (!savedData1) {
    return res.send({ msg: "Enter valid credentials", status: false })
  }
  const encodedToken = jwt.sign({ user: savedData1._id }, "Hello there")
  res.setHeader("x-auth-token", encodedToken)
  return res.send({ msg: "Logged in successfully", status: true })
}


const findUser = async function (req, res) {
  const userToBeModified = req.userToBeModified
  const savedData2 = await userModel.findById(userToBeModified)
  return res.send({ msg: savedData2, status: true })
}


const updateUser = async function (req, res){
  const userToBeModified = req.userToBeModified
  const savedData3 = await userModel.findById(userToBeModified)
if(!Object.keys(req.body).length > 0){ 
  return res.send({msg:"Please enter the attribute to update", status: false})
}
const {lastName} = req.body
if(!lastName){
  return res.send({msg: "Please enter this attribute to update", status: false})
}
const savedData4 = await userModel.findOneAndUpdate({_id: userToBeModified}, {$set: {lastName}}, {new: true})
return res.send({msg: savedData4, status: true})
}

const postUser = async function (req, res){
  const userToBeModified = req.userToBeModified
  const savedData5 = await userModel.findById(userToBeModified)
if(!Object.keys(req.body).length > 0){ 
  return res.send({msg:"Please enter the attribute to update", status: false})
}
const message = req.body.message
const updatedPost = savedData5.posts
updatedPost.push(message)
const savedData6 = await userModel.findOneAndUpdate({_id: userToBeModified}, {$set: {posts: updatedPost}}, {new: true})
return res.send({msg: savedData6, status: true})
}


const deleteUser = async function(req, res){

  const userToBeModified = req.userToBeModified
  console.log(userToBeModified)
  const savedData7 = await userModel.findById(userToBeModified)

  const savedData8 = await userModel.findOneAndUpdate({_id: userToBeModified}, {$set: {isDeleted: true}}, {new: true})
return res.send({msg: "Your account is deleted", status: true})
}





module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.findUser = findUser
module.exports.updateUser = updateUser
module.exports.postUser = postUser
module.exports.deleteUser =  deleteUser
