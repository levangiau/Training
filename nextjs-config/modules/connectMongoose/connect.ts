
import mongoose from 'mongoose'

// const Schema = new mongoose.Schema({
//     title: String,
//     name: String
// })

async function dbConnect() {
    mongoose.connect('mongodb://localhost:27017/createSchema', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('connect done!!!!!!')
        })
        .catch((err) => {
            console.log('can`t not connect!!!!', err)
            process.exit()
        })

}

export default dbConnect