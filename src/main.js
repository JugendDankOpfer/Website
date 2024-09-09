import './assets/main.css'
import './assets/JuDaOLogo.png'
import './assets/symbols/cake.svg'
import './assets/symbols/lock.svg'
import './assets/symbols/trashcan.svg'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/router.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
