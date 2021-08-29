<template>
  <div class="about">
    <h1>新建文章</h1>
    <el-form ref="forms" :rules="rules" :model="model" label-width="120px">
      <el-form-item prop="categories" label="所属分类">
        <el-select collapse-tags v-model="model.categories" multiple>
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="title" label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item prop="body" label="详情">
        <vue-editor v-model="model.body" useCustomImageHandler @imageAdded="handleImageAdded"></vue-editor>
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
import * as api from '@/api'

const forms = ref(null)
const categories = ref([])
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
  const res = await api.setting.createArticle(model).finally(() => saveLoading.value = false)
  const { errcode, data } = res
  if (errcode === 0) {
    alert('添加成功')
  }
}

const save = () => {
  forms.value.validate((err) => {
    if (err) {
      handleSave()
    }
  })
}

const fetchCatgories = async () => {
  const res = await api.setting.getCateGoryList()
  const { errcode, data } = res
  if (errcode === 0) {
    categories.value = data?.list || []
  }
}

fetchCatgories()

const handleImageAdded = (file, Editor, cursorLocation, resetUploader) => {
  var formData = new FormData()
  formData.append("file", file)

  // Editor.insertEmbed(cursorLocation, "image", url)
  // resetUploader()
  console.log(formData)
}

</script>