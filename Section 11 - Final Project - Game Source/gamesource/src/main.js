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


// MASONRY 
import { VueMasonryPlugin } from 'vue-masonry';

/// FIREBASE
import { AUTH } from './utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'


const vuetify = createVuetify({ components, directives })


let app;

// AUTO SIGN IN AFTER PAGE UPDATE
onAuthStateChanged(AUTH, () => {
    if(!app) {
        app = createApp(App)
        app.use(vuetify)
        app.use(ToastPlugin)
        app.use(createPinia())
        app.use(router)
        app.use(VueMasonryPlugin)

        app.mount('#app')
    }
})