
module.exports = (app) => {
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://localhost:27017/serve', { useNewUrlParser: true, useUnifiedTopology: true })

  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'error'))
  db.once('open', () => {
    console.log('open')
  })
  require('require-all')({ dirname: __dirname + '/../models' })
}