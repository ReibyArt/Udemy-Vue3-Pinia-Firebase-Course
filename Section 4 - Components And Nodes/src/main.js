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
// Custom directive hooks
app.directive('hooks', {
  // Hooks //
  created(el) {
    console.log('created');
    console.log(el.parentNode + ' -> el.parent'); // NULL
  },

  // Hint! // 
  beforeMount(el) {
    console.log('beforeMount');
    console.log(el.parentNode + ' -> el.parent'); // NULL

    el.innerHTML = 'Hello from my directive hooks!'
    console.log('My hook!');
  },

  mounted(el) {
    console.log('mounted');
    console.log(el.parentNode + ' -> el.parent'); // our div in index.vue

  },

  beforeUpdate(el, binding) {
    console.log('beforeUpdate!')
    console.log(el.parentNode);
    el.innerHTML = binding.value;
  },

  updated(el) {
    console.log('UPDATED!');
    console.log(el.parentNode + ' -> el.parent'); // NULL
  },

  beforeUnmount() {
    console.log('beforeUnmount!');
  },

  unmounted() {
    console.log('unmounted! FINISH!');
  }
});

// MAIN APP //
app.mount("#app");