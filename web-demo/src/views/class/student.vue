<script setup>
import {CirclePlus, Delete} from "@element-plus/icons-vue";
import {reactive, ref} from "vue";

const formInline = reactive({
  name: '',
  id: '',
  highestDegree: '',
  className: '',
})

const form = reactive({
  name: '',
  id: '',
  gender: '',
  score: '',
})

const table = [
  {
    name: '张三',
    id: '123',
    className: '2024-01-10',
    gender: '男',
    phone: '123123421234',
    highestDegree: '博士',
    breakRuleTime: 1,
    breakRuleSocre: 10,
  },
  {
    name: '张三',
    id: '123',
    className: '2024-01-10',
    gender: '男',
    phone: '123123421234',
    highestDegree: '博士',
    breakRuleTime: 1,
    breakRuleSocre: 10,
  }, {
    name: '张三',
    id: '123',
    className: '2024-01-10',
    gender: '男',
    phone: '123123421234',
    highestDegree: '博士',
    breakRuleTime: 1,
    breakRuleSocre: 10,
  }, {
    name: '张三',
    id: '123',
    className: '2024-01-10',
    gender: '男',
    phone: '123123421234',
    highestDegree: '博士',
    breakRuleTime: 1,
    breakRuleSocre: 10,
  }, {
    name: '张三',
    id: '123',
    className: '2024-01-10',
    gender: '男',
    phone: '123123421234',
    highestDegree: '博士',
    breakRuleTime: 1,
    breakRuleSocre: 10,
  }, {
    name: '张三',
    id: '123',
    className: '2024-01-10',
    gender: '男',
    phone: '123123421234',
    highestDegree: '博士',
    breakRuleTime: 1,
    breakRuleSocre: 10,
  }, {
    name: '张三',
    id: '123',
    className: '2024-01-10',
    gender: '男',
    phone: '123123421234',
    highestDegree: '博士',
    breakRuleTime: 1,
    breakRuleSocre: 10,
  }, {
    name: '张三',
    id: '123',
    className: '2024-01-10',
    gender: '男',
    phone: '123123421234',
    highestDegree: '博士',
    breakRuleTime: 1,
    breakRuleSocre: 10,
  }, {
    name: '张三',
    id: '123',
    className: '2024-01-10',
    gender: '男',
    phone: '123123421234',
    highestDegree: '博士',
    breakRuleTime: 1,
    breakRuleSocre: 10,
  }, {
    name: '张三',
    id: '123',
    className: '2024-01-10',
    gender: '男',
    phone: '123123421234',
    highestDegree: '博士',
    breakRuleTime: 1,
    breakRuleSocre: 10,
  }, {
    name: '张三',
    id: '123',
    className: '2024-01-10',
    gender: '男',
    phone: '123123421234',
    highestDegree: '博士',
    breakRuleTime: 1,
    breakRuleSocre: 10,
  }, {
    name: '张三',
    id: '123',
    className: '2024-01-10',
    gender: '男',
    phone: '123123421234',
    highestDegree: '博士',
    breakRuleTime: 1,
    breakRuleSocre: 10,
  }, {
    name: '张三',
    id: '123',
    className: '2024-01-10',
    gender: '男',
    phone: '123123421234',
    highestDegree: '博士',
    breakRuleTime: 1,
    breakRuleSocre: 10,
  },
]


const highestDegreeValue = ref('')
const highestDegreeOptions = [
  {
    value: '初中',
    label: '初中',
  },
  {
    value: '高中',
    label: '高中',
  },
  {
    value: '大专',
    label: '大专',
  },
  {
    value: '本科',
    label: '本科',
  },
  {
    value: '硕士',
    label: '硕士',
  },
  {
    value: '博士',
    label: '博士',
  },

]

const classNameValue = ref('')
const classNameOptions = [
  {
    value: '2024第01期01班',
    label: '2024第01期01班',
  },
  {
    value: '2024第01期01班',
    label: '2024第01期01班',
  },
  {
    value: '2024第01期01班',
    label: '2024第01期01班',
  },
  {
    value: '2024第01期01班',
    label: '2024第01期01班',
  },
  {
    value: '2024第01期01班',
    label: '2024第01期01班',
  },
]

const onSubmit = () => {
  console.log('submit!')
}


const dialogNewStudentVisible = ref(false)
const dialogDeleteStudentVisible = ref(false)
const dialogEditStudentVisible = ref(false)
const dialogDealVisible = ref(false)
const dialogPathDeleteStudentVisible = ref(false)
const currentPage = ref(4)
const pageSize = ref(100)

</script>

<template>
  <div>
    <div class="heading">
      学员管理
    </div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="学员姓名">
        <el-input v-model="formInline.name" placeholder="请输入班级名称" clearable/>
      </el-form-item>
      <el-form-item label="学号">
        <el-input v-model="formInline.id" placeholder="请输入学号" clearable/>
      </el-form-item>
      <el-form-item label="最高学历">
        <el-select
            v-model="highestDegreeValue"
            placeholder="Select"
            style="width: 240px"
        >
          <el-option
              v-for="item in highestDegreeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="所属班级">
        <el-select
            v-model="classNameValue"
            placeholder="Select"
            style="width: 240px"
        >
          <el-option
              v-for="item in classNameOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div>
      <el-button-group>
        <el-button type="primary" @click="dialogNewStudentVisible = true" style="margin-bottom: 10px">
          <el-icon>
            <CirclePlus/>
          </el-icon>
          添加学员
        </el-button>
        <el-button type="primary" @click="dialogPathDeleteStudentVisible = true" style="margin-bottom: 10px">
          <el-icon>
            <Delete/>
          </el-icon>
          批量删除
        </el-button>
      </el-button-group>
    </div>
    <el-dialog title="添加学员" v-model="dialogNewStudentVisible" destroy-on-close>
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="姓名" prop="className">
          <el-input v-model="form.name" placeholder="请输入姓名"/>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="form.id" placeholder="请输入学号"/>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.gender" placeholder="请选择">
            <el-option label="男" value="man"/>
            <el-option label="女" value="woman"/>
          </el-select>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.phone" placeholder="请输入手机号"/>
        </el-form-item>
        <el-form-item label="最高学历">
          <el-select
              v-model="highestDegreeValue"
              placeholder="Select"
              style="width: 100%"
          >
            <el-option
                v-for="item in highestDegreeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="所属班级">
          <el-select
              v-model="classNameValue"
              placeholder="Select"
              style="width: 100%"
          >
            <el-option
                v-for="item in classNameOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="evt => {
            console.log('create')
            dialogNewStudentVisible = false
          }">
            保存
          </el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="编辑学员" v-model="dialogEditStudentVisible" destroy-on-close>
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="姓名" prop="className">
          <el-input v-model="form.name" placeholder="请输入姓名"/>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="form.id" placeholder="请输入学号"/>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.gender" placeholder="请选择">
            <el-option label="男" value="man"/>
            <el-option label="女" value="woman"/>
          </el-select>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.phone" placeholder="请输入手机号"/>
        </el-form-item>
        <el-form-item label="最高学历">
          <el-select
              v-model="highestDegreeValue"
              placeholder="Select"
              style="width: 100%"
          >
            <el-option
                v-for="item in highestDegreeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="所属班级">
          <el-select
              v-model="classNameValue"
              placeholder="Select"
              style="width: 100%"
          >
            <el-option
                v-for="item in classNameOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="evt => {
            console.log('create')
            dialogNewStudentVisible = false
          }">
            保存
          </el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog
        v-model="dialogDealVisible"
        title="学员违纪处理"
        width="500"
        align-center
        destroy-on-close
    >
      <el-form>
        <el-form-item label="违纪扣分">
          <el-input v-model="form.score"/>
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="dialogDealVisible = false">
            确定
          </el-button>
          <el-button @click="dialogDealVisible = false">
            取消
          </el-button>
        </div>
      </template>
    </el-dialog>
    <el-dialog
        v-model="dialogDeleteStudentVisible"
        title="删除学员"
        width="500"
        align-center
        destroy-on-close
    >
      <span>您确定要删除该学员的信息吗 ?</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="dialogDeleteStudentVisible = false">
            确定
          </el-button>
          <el-button @click="dialogDeleteStudentVisible = false">
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
        <el-table-column prop="name" label="姓名"/>
        <el-table-column prop="id" label="学号"/>
        <el-table-column prop="className" label="班级"/>
        <el-table-column prop="gender" label="性别"/>
        <el-table-column prop="phone" label="手机号"/>
        <el-table-column prop="highestDegree" label="最高学历"/>
        <el-table-column prop="breakRuleTime" label="违纪次数"/>
        <el-table-column prop="breakRuleSocre" label="违纪扣分"/>
        <el-table-column fixed="right" label="操作">
          <template #default>
            <el-button link type="primary" size="small" @click="dialogEditStudentVisible = true">
              编辑
            </el-button>
            <el-button link type="primary" size="small" @click="dialogDealVisible = true">
              违纪
            </el-button>
            <el-button link type="primary" size="small" @click="dialogDeleteStudentVisible = true">
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