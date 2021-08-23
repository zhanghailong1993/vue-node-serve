<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form ref="forms" :model="form" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请填写用户名" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" placeholder="密码" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import * as api from '@/api/index'

const router = useRouter()
const form = reactive({
  username: '',
  password: ''
})

const forms = ref(null)

const rules = reactive({
  username: [
    {
      required: true, message: '请输入用户名', trigger: 'blur'
    }
  ],
  password: [
    {
      required: true, message: '请输入密码', trigger: 'blur'
    }
  ]
})

const login = async () => {
  const res = await api.login.login(form)
  localStorage.token = res.data.token
  router.push('/')
  // this.$message({
  //   type: 'success',
  //   message: '登录成功'
  // })
}

const submit = () => {
  forms.value.validate((value) => {
    if (value) {
      login()
    }
  })
}

</script>