const mongoose = require('mongoose')
const Schema = mongoose.Schema

const items = new Schema({
  title: {
    type: String
  },
  body: String,
  categories: Array
}, {
  timestamps: true
})

module.exports = mongoose.model('article', items)