import axios from "axios";
import {Base64} from "js-base64";
import {ElMessageBox} from "element-plus";

// axios 通用配置
let instance = axios.create({
    responseType: "json",
    headers: {'Content-Type': 'application/json'}
})

const baseFun = () => {
    //缓存中获取token
    const token = localStorage.getItem('token')
    const base64 = Base64.encode(token + ':')
    return 'Basic' + base64
}

/*
 * **拦截请求**
 * 将请求头携带token校验身份
 * 在发送请求之前
 */
instance.interceptors.request.use(
    config => {
        let token = localStorage.getItem('token')
        if (token) {
            // token 加密
            config.headers.Authorization = baseFun()
        }
        return config
    },

    err => {
        return Promise.reject(err)
    }
)

/*
 * **拦截请求**
 * 将请求头携带token校验身份
 * 在发送请求之后
 */
instance.interceptors.request.use(
    response => {
        return response
    },

    error => {
        if (error.response) {
            let ERRS = error.response.status
            let MSG = error.response.data.msg.msg
            let errData = ERRS === 401 ? MSG : '服务器发生错误'
            switch (ERRS) {
                // 无访问权限
                case 401:
                    ElMessageBox.alert(errData, '提示', {
                        // if you want to disable its autofocus
                        // autofocus: false,
                        confirmButtonText: '好的',
                        type: 'error',
                    }).then(res => {
                        //跳转登录
                    }).catch(err => {

                    })
                    break;
            }
        }
        // 返回接口错误信息
        return Promise.reject(error.response.data)
    }
)
export default instance