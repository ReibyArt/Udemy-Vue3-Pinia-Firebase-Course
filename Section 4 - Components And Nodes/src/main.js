import { createApp } from "vue";

import App from "./App.vue";
// GLOBAL COMPONENT //
import Header from "./components/header_footer/Header.vue";

const app = createApp(App);

// Register of components and use it in App.vue!)
app.component('app-header', Header);



app.mount("#app");