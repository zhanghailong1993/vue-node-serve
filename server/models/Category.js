const mongoose = require('mongoose')
const Schema = mongoose.Schema

const items = new Schema({
    name: String,
    parent: { type: Schema.Types.ObjectId, ref: 'categories' }
}, {timestamps: {createdAt: 'created', updatedAt: 'updated'}})

module.exports = mongoose.model('categories', items)