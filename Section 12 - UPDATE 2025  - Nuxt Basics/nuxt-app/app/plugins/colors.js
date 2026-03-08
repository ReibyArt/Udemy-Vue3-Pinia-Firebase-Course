import MyButton from '~/components/button.vue';

export default defineNuxtPlugin(nuxtApp => {
    console.log(nuxtApp);
    nuxtApp.provide('red', '#ff0000');
    nuxtApp.provide('green', '#00ff00');
    nuxtApp.provide('blue', '#0000ff');

    // Use Function
    nuxtApp.provide('ourFunc', (name) => alert(`Hello, ${name}`)); // Обратные ковычки не забываем!

    // Register Global Component
    nuxtApp.vueApp.component('MyButton', MyButton);
})