// 主要用于将所有接口代理到某个地址，使用场景：本地调试预演环境接口配置 api = '/test'
const api = ''
// 控制所有接口是否都走mock服务
const allMock = true
let apiAgent = {}
const agencyList = [
  { name: 'test', directTo: '/test', openMock: false },
  { name: 'auth', directTo: '/auth', openMock: false },
  { name: 'apiAdmin', directTo: '/api/admin', openMock: false }
]
agencyList.forEach((item) => {
  apiAgent[item.name] = allMock || item.openMock ? '/mock' : api || item.directTo
  if (process.env.NODE_ENV !== 'development') apiAgent[item.name] = ''
})

export { apiAgent }
