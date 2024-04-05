import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import(/*webpackChunkName:'Login'*/ '@/views/login/login.vue')
    },
    {
        path: '/index',
        name: 'index',
        component: () => import(/*webpackChunkName:'Index'*/ '@/views/index/index.vue'),
        // redirect: '/class',
        children: [
            {
                path: '/class',
                name: 'class',
                component: () => import(/*webpackChunkName:'Class'*/ '@/views/class/class.vue')
            },
            {
                path: '/student',
                name: 'student',
                component: () => import(/*webpackChunkName:'Student'*/ '@/views/class/student.vue')
            },
            {
                path: '/data',
                name: 'data',
                component: () => import(/*webpackChunkName:'Data'*/ '@/views/data/data.vue')
            },
            {
                path: '/depart',
                name: 'depart',
                component: () => import(/*webpackChunkName:'Depart'*/ '@/views/system/department.vue')
            },
            {
                path: '/staff',
                name: 'staff',
                component: () => import(/*webpackChunkName:'Class'*/ '@/views/system/staff.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
