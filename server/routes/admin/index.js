const express = require('express')
// const jwt = require('jsonwebtoken')
let router = express.Router({
  mergeParams: true
})

// 创建资源
router.get('/:name', (req, res) => {
  res.send('hello' + req.params.name)
})

router.post('/api/login', (req, res) => {
  const { username, password } = req.body
  res.status(200).json({
    errcode: 0,
    data: 'message',
    message: '请重试'
  })
})

module.exports = router