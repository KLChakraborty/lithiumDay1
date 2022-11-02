const express = require('express');
const router = express.Router();
const model = require("../models/userModel")



router.get("/test-me", model.A)


router.post("/test-you", model.B)





module.exports = router;