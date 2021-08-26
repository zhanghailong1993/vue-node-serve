module.exports = () => {
  return async (req, res, next) => {
    console.log(req.params)
    const modelName = require('inflection').classify(req.params.resource)
    console.log(req.params.resource, modelName)
    req.Model = require(`../models/${modelName}`)
    next()
  }
}