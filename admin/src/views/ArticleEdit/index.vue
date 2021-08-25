<template>
  <div class="about">
    <h1>新建文章</h1>
    <el-form ref="forms" :rules="rules" :model="model" label-width="120px">
      <el-form-item prop="categories" label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="title" label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item prop="body" label="详情">
        <vue-editor v-model="model.body" useCustomImageHandler></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="saveLoading" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { VueEditor } from "vue3-editor"
const forms = ref(null)
const saveLoading = ref(false)
const rules = reactive({
  categories: [
    {
      required: true,
      message: '请选择分类'
    }
  ],
  title: [
    {
      required: true,
      message: '请输入标题'
    }
  ],
  body: [
    {
      required: true,
      message: '请输入详情'
    }
  ]
})
const model = reactive({
  categories: [],
  title: '',
  body: ''
})

const handleSave = async () => {
  saveLoading.value = true
}

const save = () => {
  forms.value.validate((err) => {
    if (err) {
      handleSave()
    }
  })
}

</script>