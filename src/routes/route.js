const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require("../middlewares/middleware")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/users", userController.createUser  )

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)

router.post("/createUser", userController.createUser)

router.post("/findUser", userController.findUser)

router.get("/findUser1/:id",middleware.midd, userController.findUser1)

router.put("/updateData/:id1",middleware.midd, userController.updateData)

router.delete("/deleteData/:id2",middleware.midd, userController.deleteData)

module.exports = router;