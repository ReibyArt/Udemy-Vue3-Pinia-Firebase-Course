<template>
  <div v-hooks="hookText">
    <h1>Index.vue</h1>
  </div>
  <div>
    <button @click="hookText = 'Hook Text is Updated!'">Trigger UPDATE HOOKS!</button>
  </div>
  <hr />
  <h2>Local Directives</h2>
  <div v-user-lastname="Lastname"></div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
const hookText = ref('Hooks Text!')

// Custom directive here //
const Lastname = ref('Reiby Art Games is ref local directive!!!')

const vUserLastname = {
  beforeMount(el, binding) {
    el.innerHTML = binding.value
    el.style.color = 'red'
  },
}
</script>
