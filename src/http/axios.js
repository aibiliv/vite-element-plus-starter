import axios from 'axios'
import config from './config'
// import store from '@/store'
import { getToken, setToken, isTokenExpire } from '@/utils/auth'
import { ElMessageBox, ElMessage } from 'element-plus'
const myToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzeXN0ZW1fYXBwX2lkIjoxNDIsInVzZXJfbmFtZSI6InlleGluMSIsInNjb3BlIjpbImFsbCJdLCJyb2xlcyI6W3siaWQiOjEwMTg4LCJyb2xlTmFtZSI6IueuoeeQhuWRmCIsImFwcEtleSI6ImZraF9pbXMiLCJyb2xlS2V5IjoiaW1zQWRtaW4ifV0sImNsaWVudF90eXBlIjoie1widmFsdWVcIjoyLFwiZGVzY1wiOlwi5YWs5Y-4566h55CG5ZCO5Y-wXCJ9IiwiZXhwIjoxNjU0MDc3NzMzLCJ0ZW5hbnRfYXBwX2lkIjotOTk5OSwidXNlciI6IntcInR5cGVcIjpcImF1dGhvcml6YXRpb25Vc2VyXCIsXCJpZFwiOjMyNjAxOCxcInVzZXJuYW1lXCI6XCJ5ZXhpbjFcIixcIm1vYmlsZVwiOlwiMTMwMDAwMDAwMDFcIixcImVtYWlsXCI6XCJcIixcInVzZXJUeXBlXCI6e1widmFsdWVcIjo2LFwiZGVzY1wiOlwi57O757uf566h55CG5ZGYXCJ9LFwiZW50ZXJwcmlzZVR5cGVcIjotMSxcInRlbmFudEFwcElkXCI6LTk5OTksXCJzeXN0ZW1BcHBJZFwiOjE0MixcInJvbGVzXCI6W3tcImlkXCI6MTAxODgsXCJyb2xlTmFtZVwiOlwi566h55CG5ZGYXCIsXCJhcHBLZXlcIjpcImZraF9pbXNcIixcInJvbGVLZXlcIjpcImltc0FkbWluXCJ9XSxcImV4dGVuZFwiOntcIm5pY2tOYW1lXCI6XCLnrqHnkIblkZjlj7bpkatcIn19IiwiYXV0aG9yaXRpZXMiOlsi566h55CG5ZGYIl0sImp0aSI6IlkxRE1UdTFVU0g2RGl6Q00yd1hLeUdDWnZIYyIsImNsaWVudF9pZCI6ImZraF9pbXMifQ.O7K0hoq-GsjoDlIm9H1vEErlOlQRT-9g7b5Y2cnq_Js'

// 是否正在刷新的标志
let isTokenRefreshing = false
//存储请求的数组
let subscribesArr = []
// 请求push到数组中
function subscribesArrRefresh(cb) {
  subscribesArr.push(cb)
}
// 用新token发起请求
function reloadSubscribesArr(newToken) {
  subscribesArr.map((cb) => cb(newToken))
}
export default function $axios(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseUrl,
      headers: config.headers,
      timeout: config.timeout,
      withCredentials: config.withCredentials
    })

    // request 拦截器
    instance.interceptors.request.use(
      (config) => {
        // let token = getToken()
        let token = myToken
        let serverTokenExpire = localStorage.getItem('tcs_expiration')
        let serviceRefreshToken = localStorage.getItem('tcs_refreshToken')
        // 1. 请求开始的时候可以结合 vuex 开启全屏 loading 动画

        // 2. 带上token
        if (token) {
          config.headers['Authorization'] = 'Bearer ' + token
        }

        // 3. 合并hearder头参数
        if (config.config) {
          config.headers = { ...config.headers, ...config.config }
        }
        if (config.params && config.params.responseType) {
          config.headers.responseType = config.params.responseType
          delete config.params.responseType
        }

        if (config.url.includes(`/login`)) {
          return config
        }

        // 判断token是否过期
        if (serverTokenExpire && isTokenExpire(serverTokenExpire) && !config.url.includes(`/refresh/token`)) {
          // 判断token是否已经刷新过
          if (!isTokenRefreshing) {
            isTokenRefreshing = true
            // 请求刷新token
            axios
              .post(
                `/refresh/token`,
                {
                  refreshToken: serviceRefreshToken
                },
                { headers: config.headers }
              )
              .then(function (response) {
                isTokenRefreshing = false
                let data = response.data.data
                // 重新存储token，以及过期时间
                setToken(data.accessToken)
                localStorage.setItem('tcs_refreshToken', data.refreshToken)
                localStorage.setItem('tcs_expiration', data.expiration)
                reloadSubscribesArr(data.accessToken)
              })
              .catch(function () {
                // 请求失败，清空缓存，弹出提示返回登录页
                isTokenRefreshing = false
                subscribesArr = []
                window.sessionStorage.clear()
                window.localStorage.clear()
                ElMessageBox({
                  message: '登录已失效，请重新登录',
                  title: '提示',
                  confirmButtonText: '确定',
                  dangerouslyUseHTMLString: true,
                  center: true,
                  beforeClose: (action, instance, done) => {
                    done()
                  },
                  callback: function () {
                    // store.dispatch('setLogout').then(() => {
                    //   store.dispatch('resetPermissionLoad')
                    //   location.reload()
                    // })
                  }
                })
              })
          }
          let retry = new Promise((resolve, reject) => {
            subscribesArrRefresh((newToken) => {
              config.headers.Authorization = 'Bearer ' + newToken
              resolve(config)
            })
          })
          return retry
        } else {
          return config
        }
      },

      (error) => {
        // 请求错误时
        console.log('接口响应:', error)
        // 1. 请求超时
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
          console.log('timeout请求超时')
        }

        return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
      }
    )

    // response 拦截器
    instance.interceptors.response.use(
      (response) => {
        let data
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if (response.data === undefined) {
          data = JSON.parse(response.request.responseText)
        } else {
          data = response.data
        }

        // 假如返回的是文件流格式，直接返回
        if (response.config.responseType === 'blob') {
          return data
        }
        if (data.code !== 2000 && data.code !== '2000') {
          // if (document.getElementsByClassName('el-message').length > 0) {
          //   ElMessage.closeAll()
          // }

          // 增加错误调试功能，接口报错之后，假如rConsole开关打开，会直接在控制台打印接口请求和相应的响应内容
          if (window.rConsole) {
            let config = response.config
            let api = config.url.substring(1)
            let pos = api.indexOf('/')
            api = api.substring(pos)

            console.log('------------------------------------------')
            console.log('接口请求: ', {
              api地址: api,
              请求方法: config.method,
              请求头: config.headers,
              请求参数: config.data || config.params
            })
            console.log('------------------------------------------')
            console.log('接口响应：', data)
            console.log('------------------------------------------')
          }
          // 10000：token无效或者是异常 10002：无效访问: access token 不存在 10005：access token 刷新失败 10008：access token 已失效, 请重新登录
          // 10009：Header 中缺少 [X-Client-Id]  10010：X-Client-Id 无效  10011: 认证服务调用失败, 请稍后重试  10101: refresh token 已失效, 请重新登录
          // 11000: access token 已过期, 请重新登录或刷新 token   40001: 请求未授权
          if (
            data.code === 'B.A-10000' ||
            data.code === 'B.A-10002' ||
            data.code === 'B.A-10005' ||
            data.code === 'B.A-10008' ||
            data.code === 'B.A-10009' ||
            data.code === 'B.A-10010' ||
            data.code === 'B.A-10011' ||
            data.code === 'B.A-10101' ||
            data.code === 'B.A-11000'
          ) {
            ElMessageBox({
              message: '登录已失效，请重新登录',
              title: '提示',
              confirmButtonText: '确定',
              dangerouslyUseHTMLString: true,
              center: true,
              beforeClose: (action, instance, done) => {
                done()
              },
              callback: function () {
                // store.dispatch('setLogout').then(() => {
                //   store.dispatch('resetPermissionLoad')
                //   location.reload()
                // })
              }
            })
            return false
          } else {
            ElMessage({
              message: data.message || 'Error',
              type: 'error',
              duration: 5 * 1000
            })
          }
          return Promise.reject(new Error(data.message || 'Error'))
        } else {
          return data
        }
      },
      (err) => {
        if (err && err.response) {
          switch (err.response.status) {
            case 401:
              err.message = '未授权，请登录'
              break
            case 403:
              err.message = '拒绝访问'
              break
            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`
              break
            default:
          }
        }
        if (document.getElementsByClassName('el-message').length > 0) {
          ElMessage.closeAll()
        }
        ElMessage({
          message: err.message,
          type: 'error',
          duration: 5 * 1000
        })
        return Promise.reject(err) // 返回接口返回的错误信息
      }
    )

    // 请求处理
    instance(options)
      .then((res) => {
        resolve(res)
        return false
      })
      ['catch']((error) => {
        reject(error)
      })
  })
}
