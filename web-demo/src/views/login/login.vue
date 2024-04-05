<template>
  <div id="backcont">
    <div class="meituan-content">
      <div class="login-content">
        <div class="meituan-title">培训管理系统</div>
        <div class="meituan-user">
          <p>*用户名</p>
          <el-input
              class="inputflex"
              v-model="account"
              style="width: 240px"
              placeholder="请输入员工用户名"
              clearable
          />
        </div>
        <div class="meituan-user">
          <p>*密&nbsp;&nbsp;&nbsp;码</p>
          <el-input
              class="inputflex"
              v-model="password"
              type="password"
              show-password
              style="width: 240px"
              placeholder="请输入密码"
          />
        </div>

        <div class="register-view" @click="register = register === '登录' ? '注册' : '登录'">
          <p>{{ register }}</p>
        </div>
        <div class="meituan-btn">
          <el-button
              v-if="register === '注册'"
              type="primary"
              size="large"
              :loading="load"
              @click="signin"
          >登录
          </el-button>
          <el-button
              v-else
              type="primary"
              size="large"
              @click="registerin"
          >注册
          </el-button>
          <el-button type="primary" size="large">取消</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs, getCurrentInstance} from 'vue'

export default {
  setup() {
    const {proxy} = getCurrentInstance()
    const user = reactive({
      account: '',
      password: '',
      register: '注册',
      load: false,
    })

    const signin = async() => {
      user.load = true
      const obj = {
        account: user.account,
        password: user.password,
      }

      try {
        const res = class {
          static status = 200
          static data = class{
            static token = 'dshafkjhsajkdfhsjkdfhaklhdfsakjdhfa983y429'
          }
        }

        // await 需要异步使用
        // const res = await new proxy.$request(proxy.$urls.m().login, obj).modePost()
        if (res.status !== 200) {
          ElNotification({
            title: '错误',
            message: '用户名或密码错误',
            type: 'warning',
          })
        } else {
          localStorage.setItem('token', res.data.token)
        }
        user.load = false
      } catch (e) {
        ElNotification({
          title: '错误',
          message: '服务器发生错误',
          type: 'error',
        })
      }

    }
    const registerin = async () => {
      const obj = {
        account: user.account,
        password: user.password,
      }
      try {
        const res = class {
          static status = 200
        }
        // await 需要异步使用
        // const res = await new proxy.$request(proxy.$urls.m().register, obj).modePost()
        // console.log(res)
        if (res.status !== 200) {
          ElNotification({
            title: '错误',
            message: '用户名或密码格式错误',
            type: 'warning',
          })
        } else {
          ElMessageBox.confirm(
              '注册成功，是否继续登录',
              'Warning',
              {
                confirmButtonText: '继续登录',
                cancelButtonText: '取消',
                type: 'warning',
              }
          ).then(() => {
            user.register = '注册'
          }).catch(() => {
          })
        }
      } catch (e) {
        ElNotification({
          title: '错误',
          message: '服务器发生错误',
          type: 'error',
        })
      }
    }

    return {...toRefs(user), signin, registerin}
  }
}
</script>

<style>

</style>