import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// TOASTS
import ToastPlugin from 'vue-toastification';
import "vue-toastification/dist/index.css";

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'


const vuetify = createVuetify({ components, directives })
const app = createApp(App)

app.use(vuetify)
app.use(ToastPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')
