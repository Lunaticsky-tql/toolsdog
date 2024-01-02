import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/normalize.css'
// 导入Unocss样式
import 'uno.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
