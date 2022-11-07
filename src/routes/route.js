const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth = require("../middleware/auth")


router.post("/createUser", userController.createUser)

router.post("/loginUser", userController.loginUser)

router.get("/findUser/:id", auth.authenticate, auth.authorise, userController.findUser)

router.put("/updateUser/:id", auth.authenticate, auth.authorise, userController.updateUser)

router.put("/postUser/:id", auth.authenticate, auth.authorise, userController.postUser)


router.delete("/deleteUser/:id", auth.authenticate, auth.authorise, userController.deleteUser)



module.exports = router;