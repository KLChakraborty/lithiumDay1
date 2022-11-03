const express = require('express');
const router = express.Router();
const orderController = require("../controllers/orderController")
const productController = require("../controllers/productController")
const userController = require("../controllers/userController")
const commonMiddleware = require("../middlewares/commonMiddleware")


router.post("/createProduct", productController.createProduct)

router.post("/createUser", commonMiddleware.middleware, userController.createUser)

router.post("/createOrder", commonMiddleware.middleware, commonMiddleware.middleware1, orderController.createOrder)








module.exports = router;