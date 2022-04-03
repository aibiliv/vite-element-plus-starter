import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Layout from "../layout/Layout.vue";
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
            }
        ]
    }
]
const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router