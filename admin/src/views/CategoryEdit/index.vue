<template>
  <div>
    <h1>新建分类</h1>
    <el-form ref="forms" :model="model" :rules="rules" label-width="80px">
      <el-form-item prop="name" label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'

const forms = ref(null)

const model = reactive({
  name: ''
})
const rules = reactive({
  name: [
    {
      required: true,
      message: '请输入名称',
      trigger: 'blur'
    }
  ]
})

const submit = async () => {

}

const save = () => {
  forms.value.validate((err) => {
    if (err) {
      submit()
    }
  })
}

</script>