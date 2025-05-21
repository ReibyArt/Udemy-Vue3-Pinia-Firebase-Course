import { createApp } from "vue";

import App from "./App.vue";
// GLOBAL COMPONENT //
import Header from "./components/header_footer/Header.vue";

const app = createApp(App);

// Register of components and use it in App.vue!)
app.component('app-header', Header);
// Create own directives GLOBAL //
app.directive('awesome', {
  beforeMount(el, binding, vnode) {
    // el - reference of element 
    // binding - data, argumenet, methods
    // vnode - ?
    el.innerHTML = 'Hello from My Custom Directive!'
    el.style.color = 'red';
    el.innerHTML = binding.value;
    if (binding.arg === 'red') {
      el.style.color = 'red'
    }
    else if (binding.arg === 'blue') {
      el.style.color = 'blue'
    }
    else if (binding.arg === 'green') {
      el.style.color = 'green'
    }
    else {
      el.style.color = 'purple'
    }

    // !!!! // 
    // // With modifiers //
    // el.style.color = binding.modifiers.red ? 'red' : 'black'
    // el.style.color = binding.modifiers.blue ? 'blue' : 'black'
    // el.style.color = binding.modifiers.green ? 'green' : 'black'
    // // Font Size //
    // el.style.fontSize = binding.modifiers.big ? '30px' : '16px'
    // el.style.fontSize = binding.modifiers.normal ? '16px' : '16px'
    // el.style.fontSize = binding.modifiers.small ? '10px' : '16px'
  }
});

// MAIN APP //
app.mount("#app");