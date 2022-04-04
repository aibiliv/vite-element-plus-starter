import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../layout/Layout.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    // redirect: '/',
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/table',
        name: 'table',
        component: () => import('../views/table/index.vue'),
        children: [
          {
            path: '/tabledetail',
            name: 'tabledetail',
            component: () => import('../views/table/detail.vue')
          }
        ]
      },
      //   {
      //     path: '/tabledetail',
      //     name: 'tabledetail',
      //     component: () => import('../views/table/detail.vue')
      //   },
      {
        path: '/menu',
        name: 'menu',
        component: () => import('../views/menu/index.vue')
      }
    ]
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})
export default router
