<script setup>
import {CirclePlus, Delete, Plus} from "@element-plus/icons-vue";
import {reactive, ref} from "vue";
import {ElMessage, UploadProps} from "element-plus";

const formInline = reactive({
  name: '',
  gender: '',
  dateStart: '',
  dateIn: '',
  dateEnd: '',
})

const form = reactive({
  name: '',
  id: '',
  gender: '',
})

const postionValue = ref('')
const postionOptions = [
  {
    value: '班主任',
    label: '班主任',
  },
  {
    value: '讲师',
    label: '讲师',
  },
  {
    value: '学工主管',
    label: '学工主管',
  },
  {
    value: '教研主管',
    label: '教研主管',
  },
]

const departmentValue = ref('')
const departmentOptions = [
  {
    value: '教研部',
    label: '教研部',
  },
  {
    value: '学工部',
    label: '学工部',
  },
]

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

const dialogNewStaffVisible = ref(false)
const dialogDeleteStaffVisible = ref(false)
const dialogEditStaffVisible = ref(false)
const dialogDealVisible = ref(false)
const dialogPathDeleteStaffVisible = ref(false)

const onSubmit = () => {
  console.log('submit!')
}
const currentPage = ref(4)
const pageSize = ref(100)
// >上传照片<

const imageUrl = ref('')

// const handleAvatarSuccess: UploadProps['onSuccess'] = (
//     response,
//     uploadFile
// ) => {
//   imageUrl.value = URL.createObjectURL(uploadFile.raw)
// }
//
// const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
//   if (rawFile.type !== 'image/jpeg') {
//     ElMessage.error('Avatar picture must be JPG format!')
//     return false
//   } else if (rawFile.size / 1024 / 1024 > 2) {
//     ElMessage.error('Avatar picture size can not exceed 2MB!')
//     return false
//   }
//   return true
// }

// <上传照片>
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
        <el-button type="primary" @click="dialogNewStaffVisible = true" style="margin-bottom: 10px">
          <el-icon>
            <CirclePlus/>
          </el-icon>
          新增员工
        </el-button>
        <el-button type="primary" @click="dialogPathDeleteStaffVisible = true" style="margin-bottom: 10px">
          <el-icon>
            <Delete/>
          </el-icon>
          批量删除
        </el-button>
      </el-button-group>
    </div>
    <el-dialog title="新增员工" v-model="dialogNewStaffVisible" destroy-on-close>
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="用户名" prop="id">
          <el-input v-model="form.id" placeholder="请输入用户名，2-20字符，不可重复"/>
        </el-form-item>
        <el-form-item label="员工姓名">
          <el-input v-model="form.name" placeholder="请输入员工姓名，2-10个字"/>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.gender" placeholder="请选择">
            <el-option label="男" value="man"/>
            <el-option label="女" value="woman"/>
          </el-select>
        </el-form-item>
        <el-form-item label="入职日期">
          <el-date-picker
              v-model="formInline.dateIn"
              type="date"
              placeholder="选择日期"
              clearable
              style="width: 100%;"
          />
        </el-form-item>
        <el-form-item label="职位">
          <el-select
              v-model="postionValue"
              placeholder="请选择"
              style="width: 100%"
          >
            <el-option
                v-for="item in postionOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="照片">
          <el-upload
              class="avatar-uploader"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="归属部门">
          <el-select
              v-model="departmentValue"
              placeholder="请选择"
              style="width: 100%"
          >
            <el-option
                v-for="item in departmentOptions"
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
            dialogNewStaffVisible = false
          }">
            保存
          </el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="编辑学员" v-model="dialogEditStaffVisible" destroy-on-close>
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
            dialogNewStaffVisible = false
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
        v-model="dialogDeleteStaffVisible"
        title="删除学员"
        width="500"
        align-center
        destroy-on-close
    >
      <span>您确定要删除该学员的信息吗 ?</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="dialogDeleteStaffVisible = false">
            确定
          </el-button>
          <el-button @click="dialogDeleteStaffVisible = false">
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
        <el-table-column prop="pic" label="图像"/>
        <el-table-column prop="gender" label="性别"/>
        <el-table-column prop="position" label="职位"/>
        <el-table-column prop="dateStart" label="入职时间"/>
        <el-table-column prop="dateEnd" label="最后操作时间"/>
        <el-table-column fixed="right" label="操作">
          <template #default>
            <el-button link type="primary" size="small" @click="dialogEditStaffVisible = true">
              编辑
            </el-button>
            <el-button link type="primary" size="small" @click="dialogDeleteStaffVisible = true">
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

.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>