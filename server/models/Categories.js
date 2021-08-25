const mongoose = require('mongoose')
const Schema = mongoose.Schema

var items = new Schema({
    categories_name: String
})

module.exports = mongoose.model('categories', items)