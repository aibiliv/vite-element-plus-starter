import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../layout/Layout.vue'
import Home from '../views/Home.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    
    children: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/menu',
            component: () => import('../views/menu/index.vue'),
        },
        {
            path: '/table',
            component: () => import('../views/table/index.vue'),
            children:[
                {
                    path: '/table/detail',
                    name:'tabledetail',
                    component: () => import('../views/table/detail.vue'),
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
