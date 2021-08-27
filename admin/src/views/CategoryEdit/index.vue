<template>
  <div>
    <h1>新建分类</h1>
    <el-form ref="forms" :model="model" :rules="rules" label-width="80px">
      <el-form-item prop="parent" label="上级分类">
        <el-select v-model="model.parent" placeholder="选择分类">
          <el-option
            v-for="item in parents"
            :label="item.name"
            :value="item._id"
            :key="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="name" label="名称">
        <el-input v-model="model.name" clearable></el-input>
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
const parents = ref([])
const model = reactive({
  name: '',
  parent: ''
})
const rules = reactive({
  name: [
    {
      required: true,
      message: '请输入名称',
      trigger: 'blur'
    }
  ],
  parent: [
    {
      required: true,
      message: '请选择分类',
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

const fetchParents = async () => {
  const res = await api.setting.getParents()
  const { errcode, data } = res
  if (errcode === 0) {
    const { list } = data
    parents.value = list
  }
}


fetchParents()

</script>