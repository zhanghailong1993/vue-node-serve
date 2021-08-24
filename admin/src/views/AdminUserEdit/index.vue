<template>
  <div class="about">
    <h1>新增</h1>
    <el-form ref="form" :model="params" :rules="rules" label-width="120px">
      <el-form-item prop="username" label="用户名">
        <el-input v-model="params.username" placeholder="输入用户名" />
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input v-model="params.password" type="text" placeholder="输入密码" />
      </el-form-item>
      <el-form-item>
        <el-button @click="submit" :loading="submitLoading">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive, ref, getCurrentInstance } from 'vue'
import * as api from '@/api'

const params = reactive({
  username: '',
  password: ''
})

const submitLoading = ref(false)
const form = ref(null)
const internalInstance = getCurrentInstance()
const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
})

const createAdmin = async () => {
  const res = await api.setting.createAdmin(params).finally(() => submitLoading.value = false)
  const { errcode } = res
  if (errcode === 0) {
    internalInstance.appContext.config.globalProperties.$message.success('创建成功')
  }
}

const submit = () => {
  form.value.validate((err) => {
    if (err) {
      submitLoading.value = true
      createAdmin()
    }
  })
}

</script>