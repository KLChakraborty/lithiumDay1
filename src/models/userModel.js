const a  = function(req, res){
    res.send("hello")
}

const b  = function(req, res){
    res.send("hi")
}

module.exports.A = a
module.exports.B = b