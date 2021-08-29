<template>
  <div>
    <h1>分类列表</h1>
    <el-table :data="items" style="width: 100%" :loading="tableLoading" >
      <el-table-column prop="_id" label="ID" width="480"></el-table-column>
      <el-table-column prop="name" label="分类名称"></el-table-column>
      <el-table-column prop="created" label="创建时间"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template #default="scope">
          <el-button
            type="text"
            size="small"
            icon="el-icon-edit"
            >编辑</el-button
          >
          <el-button
            type="text"
            size="small"
            icon="el-icon-delete"
            @click="remove(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue'
  import * as api from '@/api'
  const items = ref([])
  const tableLoading = ref(false)

  const fetch = async () => {
    tableLoading.value = true
    const res = await api.setting.getCateGoryList().finally(() => tableLoading.value = false)
    const { errcode = 0, data = {} } = res
    if (errcode === 0) {
      const { list = [] } = data
      items.value = list
    }
  }
  fetch()

  const remove = async ({ _id: id }) => {
    const res = await api.setting.deleteCategory(id)
    const { errcode } = res
    if (errcode === 0) {
      fetch()
    }
  }
  </script>