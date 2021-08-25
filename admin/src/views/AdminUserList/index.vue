<template>
    <div>
			<h1>管理员列表</h1>
			<el-table :data="items">
				<el-table-column width="250" label="ID" prop="_id"></el-table-column>
				<el-table-column prop="username" label="用户名"></el-table-column>
				<el-table-column fixed="right" label="操作" width="180">
					<template #default="scope">
						<el-button type="text" size="small" icon="el-icon-edit" @click="router.push(`/admin_users/edit/${scope.row._id}`)">
								编辑
						</el-button>
						<el-popconfirm
							confirmButtonText='好的'
							cancelButtonText='不用了'
							icon="el-icon-info"
							iconColor="red"
							title="确定要删除吗？"
							@confirm="remove(scope.row._id)"
						>
							<template #reference>
								<el-button type="text" size="small" icon="el-icon-delete">
										删除
								</el-button>
							</template>
						</el-popconfirm>		
					</template>
				</el-table-column>
		</el-table>
	</div>
</template>
<script setup>
import { ref, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import * as api from '@/api'

const internalInstance = getCurrentInstance()
const router = useRouter()
const items = ref([])

const fetch = async () => {
    const res = await api.setting.getUserList()
    const { errcode, data } = res
    if (errcode === 0) {
        const { list = [] } = data
        items.value = list
    }
}
fetch()

const remove = async (id) => {
  const res = await api.setting.deleteUser({ id })
  const { errcode } = res
  if (errcode === 0) {
		internalInstance.appContext.config.globalProperties.$message.success('删除成功')
		fetch()
  }
}
</script>