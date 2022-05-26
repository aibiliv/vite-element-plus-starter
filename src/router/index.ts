import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../layout/Layout.vue'
import Home from '../views/Home.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Home
      },
      {
        path: '/menu',
        component: () => import('../views/menu/index.vue')
      },
      {
        path: '/approvalManagement',
        redirect: '/approvalManagement/projectApproval/index',
        component: () => import('../views/approvalManagement/projectApproval/index.vue'),
        children: [
          {
            path: '/approvalManagement/projectApproval/index',
            component: () => import('../views/approvalManagement/projectApproval/index.vue'),
            alias: '/home'
          }
        ]
      },
      {
        path: '/table',
        component: () => import('../views/table/index.vue'),
        children: [
          {
            path: '/table/detail',
            name: 'tabledetail',
            component: () => import('../views/table/detail.vue'),
            children: [
              {
                path: '/table/detail',
                name: 'tabledetail',
                component: () => import('../views/table/detail.vue')
              }
            ]
          }
        ]
      },
      {
        path: '/systemConfig',
        component: () => import('@/views/systemConfig/role/index.vue'),
        redirect: '/systemConfig/role',
        children: [
          {
            path: '/systemConfig/role',
            name: 'role',
            component: () => import('@/views/systemConfig/role/index.vue')
          },
          {
            path: '/systemConfig/user',
            name: 'user',
            component: () => import('@/views/systemConfig/user/index.vue')
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
