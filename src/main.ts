import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils/index'
import yxUI from './components'
import api from '@/http/api'
// 路由守卫
import './permission'
// import '~/styles/index.scss'
const app = createApp(App)

for (let i in Icons) {
  app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
}

app.provide('$api', api)
app.use(router).use(store).use(ElementPlus).use(yxUI)
app.mount('#app')
