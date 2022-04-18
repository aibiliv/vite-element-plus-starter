import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import FirstScreen from '../views/FirsrtScreen.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: FirstScreen,
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})
export default router
