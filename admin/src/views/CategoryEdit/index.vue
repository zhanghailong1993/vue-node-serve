<template>
  <div>
    <h1>新建分类</h1>
    <el-form ref="forms" :model="model" :rules="rules" label-width="80px">
      <el-form-item prop="categories_name" label="名称">
        <el-input v-model="model.categories_name" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="saveLoading" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive, ref, getCurrentInstance } from 'vue'
import * as api from '@/api'

const forms = ref(null)
const saveLoading = ref(false)
const internalInstance = getCurrentInstance()
const model = reactive({
  categories_name: ''
})
const rules = reactive({
  categories_name: [
    {
      required: true,
      message: '请输入名称',
      trigger: 'blur'
    }
  ]
})

const submit = async () => {
  saveLoading.value = true
  const res = await api.setting.createCategoy(model).finally(() => saveLoading.value = false)
  const { errcode } = res
  if (errcode === 0) {
		internalInstance.appContext.config.globalProperties.$message.success('保存成功')
  }
}

const save = () => {
  forms.value.validate((err) => {
    if (err) {
      submit()
    }
  })
}

</script>