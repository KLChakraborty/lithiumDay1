// const jwt = require("jsonwebtoken");
// const userModel = require("../models/userModel");

// /*
//   Read all the comments multiple times to understand why we are doing what we are doing in login api and getUserData api
// */
// const createUser = async function (abcd, xyz) {
//   //You can name the req, res objects anything.
//   //but the first parameter is always the request 
//   //the second parameter is always the response
//   let data = abcd.body;
//   let savedData = await userModel.create(data);
//   console.log(abcd.newAtribute);
//   xyz.send({ msg: savedData });
// };

// const loginUser = async function (req, res) {
//   let userName = req.body.emailId;
//   let password = req.body.password;

//   let user = await userModel.findOne({ emailId: userName, password: password });
//   if (!user)
//     return res.send({
//       status: false,
//       msg: "username or the password is not corerct",
//     });

//   // Once the login is successful, create the jwt token with sign function
//   // Sign function has 2 inputs:
//   // Input 1 is the payload or the object containing data to be set in token
//   // The decision about what data to put in token depends on the business requirement
//   // Input 2 is the secret (This is basically a fixed value only set at the server. This value should be hard to guess)
//   // The same secret will be used to decode tokens 
//   let token = jwt.sign(
//     {
//       userId: user._id.toString(),
//       batch: "thorium",
//       organisation: "FunctionUp",
//     },
//     "functionup-plutonium-very-very-secret-key"
//   );
//   res.setHeader("x-auth-token", token);
//   res.send({ status: true, token: token });
// };

// const getUserData = async function (req, res) {
//   let token = req.headers["x-Auth-token"];
//   if (!token) token = req.headers["x-auth-token"];

//   //If no token is present in the request header return error. This means the user is not logged in.
//   if (!token) return res.send({ status: false, msg: "token must be present" });

//   console.log(token);

//   // If a token is present then decode the token with verify function
//   // verify takes two inputs:
//   // Input 1 is the token to be decoded
//   // Input 2 is the same secret with which the token was generated
//   // Check the value of the decoded token yourself

//   // Decoding requires the secret again. 
//   // A token can only be decoded successfully if the same secret was used to create(sign) that token.
//   // And because this token is only known to the server, it can be assumed that if a token is decoded at server then this token must have been issued by the same server in past.
//   let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
//   if (!decodedToken)
//     return res.send({ status: false, msg: "token is invalid" });

//   let userId = req.params.userId;
//   let userDetails = await userModel.findById(userId);
//   if (!userDetails)
//     return res.send({ status: false, msg: "No such user exists" });

//   res.send({ status: true, data: userDetails });
//   // Note: Try to see what happens if we change the secret while decoding the token
// };

// const updateUser = async function (req, res) {
//   // Do the same steps here:
//   // Check if the token is present
//   // Check if the token present is a valid token
//   // Return a different error message in both these cases

//   let userId = req.params.userId;
//   let user = await userModel.findById(userId);
//   //Return an error if no user with the given id exists in the db
//   if (!user) {
//     return res.send("No such user exists");
//   }

//   let userData = req.body;
//   let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
//   res.send({ status: updatedUser, data: updatedUser });
// };

// module.exports.createUser = createUser;
// module.exports.getUserData = getUserData;
// module.exports.updateUser = updateUser;
// module.exports.loginUser = loginUser;


const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const objectId = mongoose.isValidObjectId

const createUser = async function(req, res){

    const body = req.body;
    const savedData = await userModel.create(body)
    res.send({msg: savedData})
}

const findUser = async function(req, res){
const email = req.body.emailId
const password = req.body.password
   
    const savedData = await userModel.findOne({emailId: email, password: password})
    if(!savedData){
       return res.send("Enter valid credentials")
    }
    const encodeToken = jwt.sign({userId: savedData._id}, "function lithium cohort")
    res.setHeader("x-auth-token", encodeToken);
    res.send({msg: encodeToken, status: true})
}


const findUser1 = async function(req, res){
    let userId = req.params.id
    if(!objectId(userId)){
      return res.send("Enter valid user Id")
    }
    const savedData2 = await userModel.findById(userId)
      
return res.send({msg: savedData2})
}



const updateData = async function(req, res){

let userId1 = req.params.id1

if(!objectId(userId1)){
  return res.send("Enter valid user Id")
}

const savedData3 = await userModel.findById(userId1)

  let body = req.body
if(!Object.keys(body).length > 0){ 
  return res.send("Please enter the attribute to update")
}
const savedData4 = await userModel.findOneAndUpdate({_id: savedData3}, {$set: {firstName: body.firstName}}, {new: true})

return res.send({msg: savedData4})
}


const deleteData = async function(req, res){
    
    let userId2 = req.params.id2
    if(!objectId(userId2)){
      return res.send("Enter valid user Id")
    }

    const savedData4 = await userModel.findById(userId2)

    const savedData5 = await userModel.findOneAndUpdate({_id: savedData4}, {$set: {isDeleted: true}}, {new: true})
    return res.send({msg: savedData5})
    }

module.exports.createUser = createUser

module.exports.findUser = findUser

module.exports.findUser1 = findUser1

module.exports.updateData = updateData

module.exports.deleteData = deleteData