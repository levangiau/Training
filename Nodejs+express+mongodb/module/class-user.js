const mongoose = require('mongoose')
//khoi tao doi tuong user
const User = new mongoose.Schema({
    email:String,
    phone:Number,
    pass:String,
    name:String
})


module.exports = mongoose.model('user',User)