/**
 * Import images theo dang Modules
 */

const withImages = require('next-images')
const { env } = require('process')
//  const mongoose = require('mongoose')

module.exports = withImages()
// mongoose.connect('mongodb://localhost:27017/create', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('connected'))
//   .catch(error => console.log(error))

// module.exports = {
//     env:{Mongo_Uri:'mongodb://localhost:27017/createSchema'}
//   }