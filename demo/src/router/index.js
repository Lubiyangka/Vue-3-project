import {createRouter, createWebHashHistory} from 'vue-router'
import Layout from "@/views/Layout/LayoutIndex.vue"
import Login from "@/views/Login/LoginIndex.vue";

const routes = [
    {
        path: '/',
        component: Layout,
        // children: []
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
