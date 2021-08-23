const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 3000

app.use('/admin', require('./routes/admin'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})