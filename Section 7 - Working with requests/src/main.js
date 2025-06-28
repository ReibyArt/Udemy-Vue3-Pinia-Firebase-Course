import { createApp } from 'vue'
import App from './App.vue'

import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import Header from './components/header/Header.vue';
import Loader from './components/Utils/loader.vue';

const app =  createApp(App);

app.component('app-header',Header);
app.component('app-loader', Loader);
app.use(Vue3Toastify);
app.mount('#app')


// npm install --save vue3-toastify
// Мы используем Json-server library
// json-server --watch db.json --port 3004