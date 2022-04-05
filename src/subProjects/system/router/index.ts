import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import FirsrtScreen from '../views/FirsrtScreen.vue'
import Home from '../views/Home.vue'
import Layout from '@/layout/Layout.vue'
const basePath = '/system-web'
const routes: any[] = [
  {
    path: '/',
    component: FirsrtScreen
  },
  {
    path: basePath,
    component: Layout,
    children: [
      {
        title: '系统管理首页',
        path: basePath + '/home',
        name: 'home',
        icon: 'Document',
        component: Home
      },
      {
        title: '系统表格管理',
        path: basePath + '/table',
        // redirect: basePath + '/table/tableList',
        icon: 'Document',
        name: 'table',
        component: () => import('../views/table/index.vue'),
        children: [
          {
            title: '系统表格列表',
            path: basePath + '/table/tableList',
            icon: 'Document',
            name: 'tableList',
            hidden: true,
            component: () => import('../views/table/index.vue')
          },
          {
            title: '系统表格详情',
            path: basePath + '/table/tableDetail',
            icon: 'Document',
            name: 'tableDetail',
            hidden: true,
            component: () => import('../views/table/detail.vue')
          }
        ]
      },
      {
        title: '系统菜单管理',
        path: basePath,
        name: basePath + '/menu',
        icon: 'Document',
        component: () => import('../views/menu/index.vue'),
        children: [
          {
            title: '系统菜单列表',
            path: basePath + '/menu/menuList',
            name: 'menu',
            component: () => import('../views/menu/index.vue')
          }
        ]
      }
    ]
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})
export default router
