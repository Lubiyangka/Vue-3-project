<template>
  <el-container class="layout-container-demo" style="height: 100vh">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '2', '3']" :default-active="ac_index" @select="selectIndex">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <message/>
            </el-icon>
            班级学员管理
          </template>
          <el-menu-item index="1-1">班级管理</el-menu-item>
          <el-menu-item index="1-2">学员管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <icon-menu/>
            </el-icon>
            系统信息管理
          </template>
          <el-menu-item index="2-1">部门管理</el-menu-item>
          <el-menu-item index="2-2">员工管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon>
              <setting/>
            </el-icon>
            数据统计管理
          </template>
          <el-menu-item index="3-1">员工信息统计</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-button-group>
            <el-button type="success" round>
              <el-icon>
                <Edit/>
              </el-icon>
              修改密码
            </el-button>
            <el-button type="success" round>
              <el-icon>
                <SwitchButton/>
              </el-icon>
              <el-link href="./">退出登录</el-link>
            </el-button>
          </el-button-group>
        </div>
      </el-header>

      <el-main style="margin-left: 0.5%">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import {onMounted, reactive, ref} from 'vue'
import {CirclePlus, Edit, Menu as IconMenu, Message, Setting, SwitchButton} from '@element-plus/icons-vue'

const ac_index = ref('1-1')

const selectIndex = (index, path) => {
  localStorage.setItem('menuId', JSON.stringify(index))
}

onMounted(() => {
  ac_index.value = JSON.parse(localStorage.getItem('menuId'))
})


const form = reactive({
  className: '',
  class: '',
  dateStart: '',
  dateEnd: '',
  teacher: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const teacher = [
  {value: 1, name: '鲁望社'},
  {value: 2, name: '张晓琪'},
  {value: 3, name: '赵大航'}
]

const onSubmit = () => {
  console.log('submit!')
}


const dialogNewClassVisible = ref(false)


</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>