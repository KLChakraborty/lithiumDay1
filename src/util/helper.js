const date = new Date();

const day = function () {
    return date.getDate()
}
const month = function () {
    return date.getMonth() + 1
}

const getInfo = {
    name: "Lithium",
    week: "W3D5",
    topic: "the topic for today is Nodejs module system"
}
const info = function () {
    return (getInfo.name + ", " + getInfo.week + ", " + getInfo.topic)
}


module.exports.printDate = day
module.exports.printMonth = month
module.exports.getBatchInfo = info


