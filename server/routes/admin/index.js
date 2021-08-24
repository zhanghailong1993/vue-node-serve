const express = require('express')
const jwt = require('jsonwebtoken')
const AdminUser = require('../../models/AdminUser')

let router = express.Router({
  mergeParams: true
})

// 创建资源
router.get('/:name', (req, res) => {
  res.send('hello' + req.params.name)
})

router.post('/api/login', async (req, res) => {
  const { username, password } = req.body
  // 1.根据用户名找用户
  const user = await AdminUser.findOne({
    username
  })
  if (!user) {
    return res.status(200).json({
      errcode: 2000,
      data: '',
      message: '用户不存在'
    })
  }
  //2.校验密码
  const isValid = require('bcrypt').compareSync(password, user.password)
  if (!isValid) {
    return res.status(200).json({
      errcode: 2000,
      data: '',
      message: '密码错误'
    })
  }
  //3.返回token
  const token = jwt.sign({ id: user.id }, 'i2u34y12oi3u4y8', { expiresIn: '1h' })

  res.json({
    errcode: 0,
    data: {
      token
    },
    message: ''
  })
 
})

module.exports = router