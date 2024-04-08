<script setup>
import {CirclePlus} from "@element-plus/icons-vue";
import {reactive, ref} from "vue";

const dialogNewDepartmentVisible = ref(false)
const dialogEditDepartmentVisible = ref(false)
const dialogDeleteDepartmentVisible = ref(false)

const form = reactive({
  depart: '',
})

const table = [
  {
    depart: '学工部',
    dateEnd: '2024-04-03 22:57:00',
  },
  {
    depart: '学工部',
    dateEnd: '2024-04-03 22:57:00',
  },
  {
    depart: '学工部',
    dateEnd: '2024-04-03 22:57:00',
  },
  {
    depart: '学工部',
    dateEnd: '2024-04-03 22:57:00',
  },
  {
    depart: '学工部',
    dateEnd: '2024-04-03 22:57:00',
  },
  {
    depart: '学工部',
    dateEnd: '2024-04-03 22:57:00',
  },
  {
    depart: '学工部',
    dateEnd: '2024-04-03 22:57:00',
  },
]
const currentPage = ref(4)
const pageSize = ref(100)

const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
  <div>
    <div class="heading">
      部门管理
    </div>
    <div>
      <el-button type="primary" @click="dialogNewDepartmentVisible = true" style="margin-bottom: 10px">
        <el-icon>
          <CirclePlus/>
        </el-icon>
        新增部门
      </el-button>
    </div>
    <el-dialog title="新增部门" v-model="dialogNewDepartmentVisible" destroy-on-close>
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="部门名称" prop="depart">
          <el-input v-model="form.depart" placeholder="请输入部门名称，长度为2-10位"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="evt => {
            console.log('create')
            dialogNewDepartmentVisible = false
          }">
            保存
          </el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="编辑部门" v-model="dialogEditDepartmentVisible" destroy-on-close>
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="姓名" prop="depart">
          <el-input v-model="form.depart" placeholder="请输入部门名称"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="evt => {
            console.log('create')
            dialogEditDepartmentVisible = false
          }">
            保存
          </el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog
        v-model="dialogDeleteDepartmentVisible"
        title="删除部门"
        width="500"
        align-center
        destroy-on-close
    >
      <span>您确定要删除该部门吗 ?</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="dialogDeleteDepartmentVisible = false">
            确定
          </el-button>
          <el-button @click="dialogDeleteDepartmentVisible = false">
            取消
          </el-button>
        </div>
      </template>
    </el-dialog>

    <el-scrollbar>
      <el-table :data="table"
                :cell-style="{ textAlign: 'center' }"
                :header-cell-style="{ 'text-align': 'center' }"
                size="large" stripe border>
        <el-table-column type="index" label="序号" width="100"/>
        <el-table-column prop="depart" label="部门名称"/>
        <el-table-column prop="dateEnd" label="最后操作时间"/>
        <el-table-column fixed="right" label="操作">
          <template #default>
            <el-button link type="primary" size="small" @click="dialogEditDepartmentVisible = true">
              编辑
            </el-button>
            <el-button link type="primary" size="small" @click="dialogDeleteDepartmentVisible = true">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-scrollbar>
    <div>
      <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[100, 200, 300, 400]"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="val => {
            console.log(`${val} items per page`)
          }"
          @current-change="val => {
            console.log(`current page: ${val}`)
          }"
      />
    </div>
  </div>
</template>

<style scoped>
.heading {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 15px;
}
</style>