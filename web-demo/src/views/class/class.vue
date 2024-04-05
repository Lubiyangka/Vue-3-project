<script setup>
import {reactive, ref} from "vue";
import {CirclePlus} from "@element-plus/icons-vue";

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

const formInline = reactive({
  class: '',
  dateStart: '',
  dateEnd: '',
})

const onSubmit = () => {
  console.log('submit!')
}

const tableClass = [
  {
    name: '2024第01期01班',
    address: 'G102',
    dateStart: '2024-03-01',
    dateEnd: '2024-04-01',
    teacher: '杨“德普”',
  },
  {
    name: '2024第01期01班',
    address: 'G102',
    dateStart: '2024-03-01',
    dateEnd: '2024-04-01',
    teacher: '杨“德普”',
  },
  {
    name: '2024第01期01班',
    address: 'G102',
    dateStart: '2024-03-01',
    dateEnd: '2024-04-01',
    teacher: '杨“德普”',
  },
  {
    name: '2024第01期01班',
    address: 'G102',
    dateStart: '2024-03-01',
    dateEnd: '2024-04-01',
    teacher: '杨“德普”',
  },
  {
    name: '2024第01期01班',
    address: 'G102',
    dateStart: '2024-03-01',
    dateEnd: '2024-04-01',
    teacher: '杨“德普”',
  },
  {
    name: '2024第01期01班',
    address: 'G102',
    dateStart: '2024-03-01',
    dateEnd: '2024-04-01',
    teacher: '杨“德普”',
  },
  {
    name: '2024第01期01班',
    address: 'G102',
    dateStart: '2024-03-01',
    dateEnd: '2024-04-01',
    teacher: '杨“德普”',
  },
  {
    name: '2024第01期01班',
    address: 'G102',
    dateStart: '2024-03-01',
    dateEnd: '2024-04-01',
    teacher: '杨“德普”',
  },
  {
    name: '2024第01期01班',
    address: 'G102',
    dateStart: '2024-03-01',
    dateEnd: '2024-04-01',
    teacher: '杨“德普”',
  },
  {
    name: '2024第01期01班',
    address: 'G102',
    dateStart: '2024-03-01',
    dateEnd: '2024-04-01',
    teacher: '杨“德普”',
  },
  {
    name: '2024第01期01班',
    address: 'G102',
    dateStart: '2024-03-01',
    dateEnd: '2024-04-01',
    teacher: '杨“德普”',
  },
  {
    name: '2024第01期01班',
    address: 'G102',
    dateStart: '2024-03-01',
    dateEnd: '2024-04-01',
    teacher: '杨“德普”',
  },
  {
    name: '2024第01期01班',
    address: 'G102',
    dateStart: '2024-03-01',
    dateEnd: '2024-04-01',
    teacher: '杨“德普”',
  },
]


const handleClick = () => {
  console.log('hicck?')
}

const dialogNewClassVisible = ref(false)
const dialogEditClassVisible = ref(false)
const dialogDeletClassVisible = ref(false)

const currentPage = ref(4)
const pageSize = ref(100)
</script>

<template>
  <div>
    <div class="heading">
      班级管理
    </div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="班级名称">
        <el-input v-model="formInline.class" placeholder="请输入班级名称" clearable/>
      </el-form-item>
      <el-form-item label="开课时间">
        <el-date-picker
            v-model="formInline.dateStart"
            type="date"
            placeholder="选择日期"
            clearable
        />
      </el-form-item>
      <el-form-item label="结课时间">
        <el-date-picker
            v-model="formInline.dateEnd"
            type="date"
            placeholder="选择日期"
            clearable
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div>
      <el-button type="primary" @click="dialogNewClassVisible = true">
        <el-icon>
          <CirclePlus/>
        </el-icon>
        新增班级
      </el-button>
    </div>
    <el-dialog title="新增班级" v-model="dialogNewClassVisible" destroy-on-close>
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="班级名称" prop="className">
          <el-input v-model="form.className" placeholder="请输入班级名称，如：2024第01期10班"/>
        </el-form-item>
        <el-form-item label="班级教室">
          <el-input v-model="form.class" placeholder="请填写班级教室"/>
        </el-form-item>
        <el-form-item label="开课时间" prop="dateStart">
          <el-date-picker
              v-model="form.dateStart"
              type="date"
              placeholder="选择日期"
              style="width: 100%"
          />
        </el-form-item>
        <el-form-item label="结课时间" prop="dateEnd">
          <el-date-picker
              v-model="form.dateEnd"
              type="date"
              placeholder="选择日期"
              style="width: 100%"
          />
        </el-form-item>
        <el-form-item label="班主任" prop="teacher">
          <el-select
              v-model="form.teacher"
              placeholder="请选择"
          >
            <el-option
                v-for="item in teacher"
                :key="item.name"
                :label="item.name"
                :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="evt => {
            console.log('create')
            dialogNewClassVisible = false
          }">
            立即创建
          </el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="修改班级" v-model="dialogEditClassVisible" destroy-on-close>
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="班级名称" prop="className">
          <el-input v-model="form.className" placeholder="请输入班级名称，如：2024第01期10班"/>
        </el-form-item>
        <el-form-item label="班级教室">
          <el-input v-model="form.class" placeholder="请填写班级教室"/>
        </el-form-item>
        <el-form-item label="开课时间" prop="dateStart">
          <el-date-picker
              v-model="form.dateStart"
              type="date"
              placeholder="选择日期"
              style="width: 100%"
          />
        </el-form-item>
        <el-form-item label="结课时间" prop="dateEnd">
          <el-date-picker
              v-model="form.dateEnd"
              type="date"
              placeholder="选择日期"
              style="width: 100%"
          />
        </el-form-item>
        <el-form-item label="班主任" prop="teacher">
          <el-select
              v-model="form.teacher"
              placeholder="请选择"
          >
            <el-option
                v-for="item in teacher"
                :key="item.name"
                :label="item.name"
                :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="evt => {
            console.log('create')
            dialogEditClassVisible = false
          }">
            立即创建
          </el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog
        v-model="dialogDeletClassVisible"
        title="删除班级"
        width="500"
        align-center
        destroy-on-close
    >
      <span>您确定要删除该班级吗 ?</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="dialogDeletClassVisible = false">
            确定
          </el-button>
          <el-button @click="dialogDeletClassVisible = false">
            取消
          </el-button>
        </div>
      </template>
    </el-dialog>

    <el-scrollbar>
      <el-table :data="tableClass"
                :cell-style="{ textAlign: 'center' }"
                :header-cell-style="{ 'text-align': 'center' }"
                size="large" stripe border>
        <el-table-column type="index" label="序号" width="100"/>
        <el-table-column prop="name" label="班级名称"/>
        <el-table-column prop="address" label="班级教室"/>
        <el-table-column prop="dateStart" label="开课时间"/>
        <el-table-column prop="dateEnd" label="结课时间"/>
        <el-table-column prop="teacher" label="班主任"/>
        <el-table-column fixed="right" label="操作">
          <template #default>
            <el-button link type="primary" size="small" @click="dialogEditClassVisible = true">
              编辑
            </el-button>
            <el-button link type="primary" size="small" @click="dialogDeletClassVisible = true">
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

.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>