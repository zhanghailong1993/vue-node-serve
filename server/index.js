const express = require('express')
const cors = require('cors')
// const expressJWT = require('express-jwt')

const port = 3000
const app = express()
app.set('secret', 'i2u34y12oi3u4y8')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(expressJWT({
//   secret: 'i2u34y12oi3u4y8',
//   algorithms: ['HS256']
// }).unless({
//   path: ['/getToken']
// }))

require('./plugins/db')(app)

app.use('/admin', require('./routes/admin'))

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {   
    //  这个需要根据自己的业务逻辑来处理（ 具体的err值 请看下面）
    res.status(419).json({
      errcode: 500,
      data: '',
      message: '登陆失败'
    })
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})