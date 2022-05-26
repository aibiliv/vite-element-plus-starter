console.log('import.meta.env', import.meta.env)
export default {
  method: 'get',
  // 基础url前缀
  // baseUrl: import.meta.env.VITE_API_BASEPATH,
  baseUrl: '/api/admin',
  // 请求头信息
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'X-Client-Id': 'fkh_ims',
    Accept: 'application/json;charset=UTF-8'
  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 50000,
  // 携带凭证
  withCredentials: true,
  cache: false,
  // 返回数据类型
  responseType: 'json'
}
