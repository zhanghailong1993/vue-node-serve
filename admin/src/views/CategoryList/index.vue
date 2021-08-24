<template>
    <div>
      <h1>分类列表</h1>
    <el-table :data="items" style="width: 100%">
      <el-table-column prop="_id" label="ID" width="480"></el-table-column>
      <el-table-column prop="name" label="分类名称"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template #default>
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
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue'
  const items = ref([])
  </script>