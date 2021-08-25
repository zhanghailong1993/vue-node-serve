const express = require('express')
const jwt = require('jsonwebtoken')
const AdminUser = require('../../models/AdminUser')
const Categories = require('../../models/Categories')

let router = express.Router({
  mergeParams: true
})

// 创建资源
router.post('/api/rest/:resource', async (req, res) => {
  const { username, password } = req.body
  const user = await AdminUser.findOne({ username })
  if (user) {
    return res.status(200).json({
      errcode: 2000,
      data: '',
      message: '用户名已存在'
    })
  }
  const createStatus = await AdminUser.create({
    username,
    password
  })
  if (createStatus) {
    return res.status(200).json({
      errcode: 0,
      message: '创建成功'
    })
  }
})

// 删除资源
router.delete('/api/rest/:resource/:id', async (req, res) => {
  await AdminUser.findByIdAndRemove(req.params.id)
  res.status(200).json({
    errcode: 0,
    message: ''
  })
})

// 获取资源
router.get('/api/rest/:resource', async(req, res) => {
  const items = await AdminUser.find().limit(100)
  res.status(200).json({
    errcode: 0,
    data: {
      list: items
    }
  })
})

router.post('/api/login', async (req, res) => {
  const { username, password } = req.body
  // 1.根据用户名找用户
  // const data = await AdminUser.create({
  //   username,
  //   password
  // })
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

router.post('/api/categories/:resource', async (req, res) => {
  const items = await Categories.create(req.body)
  if (items) {
    res.status(200).json({
      errcode: 0,
      message: 0
    })
  }
})

module.exports = router