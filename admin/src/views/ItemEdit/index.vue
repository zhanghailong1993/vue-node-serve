<template>
  <div class="about">
    <h1>新建</h1>
    <el-form ref="forms" :model="model" :rules="rules" label-width="120px">
      <el-form-item prop="name" label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item prop="icon" label="图标">
        <el-upload
          :show-file-list="false"
          class="avatar-uploader"
          :on-success="afterUpload"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="saveLoading" @click="handlerSave">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'

const forms = ref(null)
const saveLoading = ref(false)
const model = reactive({
  name: '',
  icon: ''
})
const rules = reactive({
  name: [
    { required: true, message: '请输入名称' }
  ],
  icon: [
    { required: true, message: '请输入图标' }
  ]
})

const afterUpload = (res) => {
  model.icon = res.url
}

const save = async () => {

}

const handlerSave = () => {
  forms.value.validate((err) => {
    if (err) {
      save()
    }
  })
}
</script>