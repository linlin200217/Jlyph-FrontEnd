import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'

import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'

import '@/styles/main.css'
import '@/styles/scrollbar.css'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
