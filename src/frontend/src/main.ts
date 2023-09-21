import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from "./plugins/api-plugin";

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(api, {
  baseUrl: import.meta.env.VITE_QUOTE_SERVICE_BASE_URL
})

app.mount('#app')