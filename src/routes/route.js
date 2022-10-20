const express = require('express');
const router = express.Router();

let persons = [
    {
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    }
]

router.post("/test-post-6", function (req, res) {
    let ele = req.query.votingAge;
    let arr = []
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].age >= ele) {
            persons[i].votingStatus = true
            arr.push(persons[i])
        }
    }
    return res.send({ msg: arr })
})


module.exports = router;