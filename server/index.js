const express = require('express')
const cors = require('cors')
const expressJWT = require('express-jwt')

const port = 3000
const app = express()
app.set('secret', 'i2u34y12oi3u4y8')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(expressJWT({
  secret: 'i2u34y12oi3u4y8',
  credentialsRequired: false,
  algorithms: ['HS256'],
  getToken: (req) => {
    if (req.headers.Authorization && req.headers.Authorization.split(' ')[0] === 'Bearer') {
      return req.headers.Authorization.split(' ')[1]
    } else if (req.query && req.query.token) {
      return req.query.token
    }
    return null
  }
}).unless({
  path: ['/admin/api/login']
}))

app.use('/admin', express.static(__dirname + '/admin'))

require('./plugins/db')(app)
// resourceMiddleware()
require('./routes/admin')(app)

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {   
    //  这个需要根据自己的业务逻辑来处理（ 具体的err值 请看下面）
    res.status(419).json({
      errcode: 419,
      data: '',
      message: '登陆失效'
    })
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})