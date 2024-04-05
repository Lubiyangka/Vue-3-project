import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    name:'login',
    component:()=>import(/*webpackChunkName:'Login'*/ '@/views/login/login.vue')
  },
  {
    path:'/index',
    name:'index',
    component:()=>import(/*webpackChunkName:'Index'*/ '@/views/index/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
