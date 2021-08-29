
module.exports = app => {
  const express = require('express')
  const jwt = require('jsonwebtoken')
  const moment = require('moment')
  const resourceMiddleware = require('../../middleware/resource')
  const AdminUser = require('../../models/AdminUser')

  let router = express.Router({
    mergeParams: true
  })

  // 创建资源
  router.post('/api/rest/:resource', async (req, res) => {
    const { name = '', username = '' } = req.body
    const findParams = req.resource === 'categories' ? { name }: { username }
    const user = await req.Model.findOne(findParams)
    if (user) {
      return res.status(200).json({
        errcode: 2000,
        data: '',
        message: '用户名已存在'
      })
    }
    const createStatus = await req.Model.create(req.body)
    if (createStatus) {
      return res.status(200).json({
        errcode: 0,
        message: '创建成功'
      })
    }
  })

  // 删除资源
  router.delete('/api/rest/:resource/:id', async (req, res) => {
    await req.Model.findByIdAndRemove(req.params.id)
    res.status(200).json({
      errcode: 0,
      message: ''
    })
  })

  // 获取资源
  router.get('/api/rest/:resource', async(req, res) => {
    const searchParams = {}
    if (req.resource === 'categories') {
      searchParams.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(searchParams).limit(100)
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
  app.use('/admin/api/rest/:resource', resourceMiddleware())
  app.use('/admin', router)
}
