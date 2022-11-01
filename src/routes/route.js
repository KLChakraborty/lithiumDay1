const express = require('express');
const router = express.Router();
const midd1 = require("../middlewares/userMiddleware")
const model = require("../models/userModel")


router.get("/test-me", midd1.midd, model.A)


router.post("/test-you", midd1.midd, model.B)





module.exports = router;