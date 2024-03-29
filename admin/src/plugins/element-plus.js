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
  ElNotification,
  ElMenu,
  ElAside,
  ElSubmenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElHeader,
  ElMain,
  ElContainer,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElTable,
  ElTableColumn,
  ElPopconfirm,
  ElUpload,
  ElTabs,
  ElTabPane,
  ElOption,
  ElRate,
  ElRow,
  ElCol
} from 'element-plus';

const components = [
  ElCard,
  ElButton,
  ElSelect,
  ElForm,
  ElInput,
  ElFormItem,
  ElMenu,
  ElMenuItem,
  ElHeader,
  ElContainer,
  ElMain,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAside,
  ElSubmenu,
  ElMenuItemGroup,
  ElTable,
  ElTableColumn,
  ElPopconfirm,
  ElUpload,
  ElTabs,
  ElTabPane,
  ElOption,
  ElRate,
  ElRow,
  ElCol
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