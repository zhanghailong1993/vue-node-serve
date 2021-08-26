const path = require('path')

function resolve () {
  return path.join(__dirname, ...Array.from(arguments))
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/admin/' : '/',
  outputDir: '../server/admin',
  chainWebpack: config => {
    // 添加别名
    const index = './src'
    config.resolve.alias
    .set('@', resolve(index))
    .set('views', resolve(index, 'views'))
  }
}