// 导入所有接口
import api from './api'

const apiInstall = (Vue) => {
  if (apiInstall.installed) {
    return
  }

  apiInstall.installed = true

  Object.defineProperties(Vue.prototype, {
    // 注意，此处挂载在 Vue 原型的 $api 对象上
    $api: {
      get() {
        return api
      }
    }
  })
}

export default apiInstall
