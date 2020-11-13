
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    title: String,
    name: String
})

export default mongoose.model('m', userSchema)
