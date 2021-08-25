<template>
  <div>
    <h1>英雄列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <el-table-column prop="name" label="英雄名称"></el-table-column>
      <el-table-column prop="title" label="称号"></el-table-column>
      <el-table-column prop="avatar" label="头像">
        <template #default="scope">
          <img :src="scope.row.avatar" style="height:3rem;">
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template #default="scope">
          <el-button
            type="text"
            size="small"
            @click="router.push(`/heroes/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-popconfirm
            title="这是一段内容确定删除吗？"
            @confirm="remove(scope.row)"
          >
          <template #reference>
            <el-button type="text" size="small">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const items = ref([])

const remove = () => {

}
</script>