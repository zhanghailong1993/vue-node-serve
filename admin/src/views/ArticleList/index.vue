  
<template>
  <div>
    <h1>文章列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template #default="scope">
          <el-button
            type="text"
            size="small"
            @click="router.push(`/articles/edit/${scope.row._id}`)"
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
  import * as api from '@/api'
  
  const router = useRouter()
  const items = ref([])
  
  const remove = () => {
  
  }

  const fetch = async () => {
    const res = await api.setting.getArticle()
    const { errcode, data } = res
    if (errcode === 0) {
      items.value = data?.list || []
    }
  }
  fetch()

  </script>