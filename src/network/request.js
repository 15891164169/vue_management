import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8888/api/private/v1/',
    timeout: 5000
  })

  // 请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  // 响应拦截器
  instance.interceptors.response.use(response => {
    // if (response.data.success === true) {
    //   return response.data.data
    // }
    return response
  }, err => {
    console.log(err)
  })

  return instance(config)
}
