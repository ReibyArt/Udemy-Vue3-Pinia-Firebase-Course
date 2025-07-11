import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia'
import Header from './components/header.vue'

const app = createApp(App);
const pinia = createPinia();

app.component('app-header', Header);
app.use(router);
app.use(pinia);
app.mount('#app');