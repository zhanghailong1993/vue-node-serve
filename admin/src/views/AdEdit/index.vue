<template>
  <div class="about">
    <h1>新建广告位</h1>
    <el-form ref="forms" :model="model" label-width="120px">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="广告">
        <el-button size="small" @click="model.items.push({})">
          <i class="el-icon-plus"></i> 添加广告
        </el-button>
        <el-row type="flex" style="flex-wrap: wrap">
          <el-col :md="24" v-for="(item, i) in model.items" :key="i">
            <el-form-item label="跳转链接 (URL)">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item label="图片" style="margin-top: 0.5rem;">
              <el-upload
                class="avatar-uploader"
                :show-file-list="false"
              >
                <i class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            
            <el-form-item>
              <el-button size="small" type="danger" @click="model.items.splice(i, 1)">删除</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'

const model = reactive({
  name: '',
  items: []
})
const forms = ref(null)
</script>