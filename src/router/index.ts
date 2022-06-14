import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../layout/Layout.vue'
import Home from '../views/Home.vue'
export const constRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404.vue')
  },
  {
    path: '',
    component: Layout,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Home
      },
      {
        path: '/approvalManagement/projectApproval/index',
        name: 'approvalManagement_projectApproval',
        component: () => import('../views/approvalManagement/projectApproval/index.vue')
      }
    ]
  }
]
export const asyncRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404.vue')
  },
  {
    path: '',
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
        path: '/approvalManagement/projectApproval/index',
        name: 'approvalManagement_projectApproval',
        component: () => import('../views/approvalManagement/projectApproval/index.vue')
      },
      {
        path: '/approvalManagement/contractApproval/index',
        name: 'approvalManagement_contractApproval',
        component: () => import('../views/approvalManagement/contractApproval/index.vue')
      },
      {
        path: '/approvalManagement/accountApproval/index',
        name: 'approvalManagement_accountApproval',
        component: () => import('../views/approvalManagement/accountApproval/index.vue')
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
  routes: constRoutes,
  history: createWebHistory()
})
export default router
