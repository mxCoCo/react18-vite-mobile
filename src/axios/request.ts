import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'

// console.log(import.meta.env.mode)

const service = axios.create({
  timeout: 5000,
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在请求头中添加token信息，可以根据具体业务场景进行修改
    // 如果已经存在了Authorization字段，则不需要再添加token信息
    // if (!config.headers.Authorization) {
    //   const token = localStorage.getItem('token')
    //   if (token) {
    //     config.headers.Authorization = `Bearer ${token}`
    //   }
    // }

    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { status, data } = response
    const resp = data?.body
    if (status === 200) {
      // 根据后端返回数据格式进行具体的处理
      if (resp.code == 200) {
        return Promise.resolve(resp.data)
      } else {
        const message = resp.msg || '未知错误'
        return Promise.reject(new Error(message))
      }
    } else {
      return Promise.reject(resp)
    }
  },
  (error) => {
    let message = error.message
    if (error.response && error.response.data) {
      const errData = error.response.data
      message = errData.msg || '未知错误'
    }
    return Promise.reject(new Error(message))
  }
)

/**
 * get请求
 * @param {string} url 请求地址
 * @param {object} params 查询参数
 */
export function get(url, params = {}) {
  return service.get(url, {
    params,
  })
}

/**
 * post请求
 * @param {string} url 请求地址
 * @param {object} data 提交的数据
 */
export function post(url, data = {}) {
  return service.post(url, data)
}

/**
 * put请求
 * @param {string} url 请求地址
 * @param {object} data 提交的数据
 */
export function put(url, data = {}) {
  return service.put(url, data)
}

/**
 * delete请求
 * @param {string} url 请求地址
 * @param {object} params 查询参数
 */
export function del(url, params = {}) {
  return service.delete(url, {
    params,
  })
}
