import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import "./style/headtap.css"
import urls from "@/api/api";
import request from "@/api/request";

const app = createApp(App)
app.use(router)
// 请求地址
app.config.globalProperties.$urls = urls
// 请求方法
app.config.globalProperties.$request = request
app.mount('#app')
