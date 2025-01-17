const webpack = require('webpack')
module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      '/ts': {
        target: 'http://kepu.sd-smartagriculture.cn:7071',  // 后台接口域名
        // ws: true,        //如果要代理 websockets，配置这个参数
        secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/ts': '/ts'
          }
        }
    }
  }
}
