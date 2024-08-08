import axios from 'axios'
let is_baseURL = 'http://47.98.239.223:7070' // 测试环境
// 创建axios实例
const request = axios.create({
  baseURL: is_baseURL,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})
// response服务器响应拦截器
request.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err', error)
  }
)

export default request
