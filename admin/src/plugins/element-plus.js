import {
  ElCard,
  ElForm,
  ElInput,
  ElFormItem,
  ElButton,
  ElSelect,
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification

} from 'element-plus';

const components = [
  ElCard,
  ElButton,
  ElSelect,
  ElForm,
  ElInput,
  ElFormItem
]

const plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
]

const elementsUI = (app) => {
  components.forEach(component => {
    app.component(component.name, component)
  })

  plugins.forEach(plugin => {
    app.use(plugin)
  })
  app.config.globalProperties.$message = ElMessage
}

export default elementsUI 