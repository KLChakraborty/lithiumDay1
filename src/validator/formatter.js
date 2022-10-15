const str = " functionUp  "
const t = function(){
    return str.trim()
}
const l = function(){
    return str.toLowerCase()
}
const u = function(){
    return str.toUpperCase()
}
module.exports.trim = t
module.exports.toLowerCase = l 
module.exports.toUpperCase = u