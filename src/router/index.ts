import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../layout/Layout.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout
    // redirect: '/',
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})
export default router
