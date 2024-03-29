import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入 Pinia 状态持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import '@/styles/normalize.css'

// 导入Unocss样式
import 'uno.css'
const app = createApp(App)
// 创建 Pinia 实例
const pinia = createPinia()
// 使用 Pinia 状态持久化插件
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.mount('#app')
