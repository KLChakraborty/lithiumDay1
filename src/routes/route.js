const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.post("/createUser", UserController.createUser)

router.post("/loginUser", UserController.loginUser)

router.get("/findUser/:id", commonMW.authenticate, commonMW.authorise, UserController.findUser)

router.put("/updateUser/:id", commonMW.authenticate, commonMW.authorise, UserController.updateUser)

router.delete("/deleteUser/:id", commonMW.authenticate, commonMW.authorise, UserController.deleteUser)



module.exports = router;