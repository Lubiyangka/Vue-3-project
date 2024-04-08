<script setup>
import {CirclePlus, Delete} from "@element-plus/icons-vue";
import {reactive} from "vue";

const formInline = reactive({
  name: '',
  gender: '',
  dateStart: '',
  dateEnd: '',
})

const table = [
  {
    name: '张三',
    pic: '###',
    gender: '男',
    position: '班主任',
    dateStart: '2020-02-02',
    dateEnd: '2022-03-03',
  },
  {
    name: '张三',
    pic: '###',
    gender: '男',
    position: '班主任',
    dateStart: '2020-02-02',
    dateEnd: '2022-03-03',
  },
  {
    name: '张三',
    pic: '###',
    gender: '男',
    position: '班主任',
    dateStart: '2020-02-02',
    dateEnd: '2022-03-03',
  },
  {
    name: '张三',
    pic: '###',
    gender: '男',
    position: '班主任',
    dateStart: '2020-02-02',
    dateEnd: '2022-03-03',
  },
  {
    name: '张三',
    pic: '###',
    gender: '男',
    position: '班主任',
    dateStart: '2020-02-02',
    dateEnd: '2022-03-03',
  },
  {
    name: '张三',
    pic: '###',
    gender: '男',
    position: '班主任',
    dateStart: '2020-02-02',
    dateEnd: '2022-03-03',
  },
  {
    name: '张三',
    pic: '###',
    gender: '男',
    position: '班主任',
    dateStart: '2020-02-02',
    dateEnd: '2022-03-03',
  },

]

const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
  <div>
    <div class="heading">
      员工管理
    </div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="员工姓名">
        <el-input v-model="formInline.name" placeholder="请输入员工姓名" clearable/>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="formInline.gender" placeholder="请选择" style="width: 100px">
          <el-option label="男" value="man"/>
          <el-option label="女" value="woman"/>
        </el-select>
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
      <el-button-group>
        <el-button type="primary" @click="dialogNewStudentVisible = true" style="margin-bottom: 10px">
          <el-icon>
            <CirclePlus/>
          </el-icon>
          新增员工
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
        name: '张三',
        pic: '###',
        gender: '男',
        position: '班主任',
        dateStart: '2020-02-02',
        dateEnd: '2022-03-03',
        <el-table-column type="index" label="序号" width="100"/>
        <el-table-column prop="name" label="姓名"/>
        <el-table-column prop="pic" label="图像"/>
        <el-table-column prop="gender" label="性别"/>
        <el-table-column prop="position" label="职位"/>
        <el-table-column prop="dateStart" label="入职时间"/>
        <el-table-column prop="dateEnd" label="最后操作时间"/>
        <el-table-column fixed="right" label="操作">
          <template #default>
            <el-button link type="primary" size="small" @click="dialogEditStudentVisible = true">
              编辑
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
</style>