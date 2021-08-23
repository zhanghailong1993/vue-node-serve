import { createApp } from 'vue'
import App from './App.vue'
import elementsUI from './plugins/element-plus'
import router from './router'
import http from './plugins/http'

const app = createApp(App)
elementsUI(app)
app.config.globalProperties.$http = http

app.use(router).mount('#app')
