import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import FirstScreen from '../views/FirsrtScreen.vue'
import Yexin from '@/subProjects/yexin/views/Home.vue'
import ReactApp from '@/subProjects/reactApp/App.jsx'
import SecondVue from '@/subProjects/secondVue/App.vue'
const basePath = '/system-web'
const routes: any[] = [
  {
    path: '/',
    component: FirstScreen,
    children: [
      { path: '/yexin-web', component: Yexin },
      { path: '/reactApp-web', component: ReactApp },
      { path: '/secondVue-web', component: SecondVue }
    ]
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})
export default router
