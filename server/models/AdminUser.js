const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
  username: String,
  password: {
    type: String,
    select: true,
    set: (val) => require('bcrypt').hashSync(val, 10)
  }
}, {timestamps: {createdAt: 'created', updatedAt: 'updated'}})

module.exports = mongoose.model('users', blogSchema)