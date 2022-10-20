const express = require('express');
const router = express.Router();



// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let ele= req.body.element
//     arr.push(ele)
//     res.send(  { msg: arr , status: true }  )
// })
let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]


router.post("/test-post-5", function (req, res) {
    let ele = req.body.element;
    for (let i = 0; i < players.length; i++) {
        if (players[i].name === ele.name) {
           return res.send({ msg: "Already exist" })
        } else {
            players.push(ele)
            return res.send({ msg: players })
        }
    }
})


router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of
    //numbers till last digit in the array
    let arr = [1, 2, 3, 4, 6, 7]
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i] //23
    }
    let lastNumber = arr.pop()
    let sum = lastNumber * (lastNumber + 1) / 2   //28
    let missingNumber = sum - total
    ///LOGIC WILL GO HERE
    res.send({ data: missingNumber });
});

router.get("/sol2", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of
    //numbers till last digit in the array
    let arr = [33, 34, 35, 37, 38]
    let total = 0
    let len = arr.length
    for (let i = 0; i < len; i++) {
        total = total + arr[i]
    }
    let firstNumber = arr[0]
    let lastNumber = arr.pop()
    let sum = (len + 1) * (lastNumber + firstNumber) / 2
    let missingNumber = sum - total
    ///LOGIC WILL GO HERE
    res.send({ data: missingNumber });
});
module.exports = router;