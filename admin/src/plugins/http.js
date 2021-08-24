import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router/index'

const errorHandler = (error) => {
  if (!error) return
  if (error && error.message && error.message != 'Network Error') {
    ElMessage.error(error.message)
  }
}


const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/admin/api'
})
http.interceptors.request.use((config) => {
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

http.interceptors.response.use((res) => {
  const { errcode } = res.data
  if (typeof errcode === 'number' && errcode !== 0) {
    errorHandler(res.data)
    return Promise.reject(res.data)
  }
  return res
}, err => {
  if (err.response.data.message) {
    ElMessage.error(err.response.data.message)
  }
  if (err.response.status === 401) {
    router.push('/login')
  }
})

export default http
