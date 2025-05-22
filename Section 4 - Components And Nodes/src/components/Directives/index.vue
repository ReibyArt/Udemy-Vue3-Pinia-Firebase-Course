<template>
  <div v-hooks="hookText">
    <h1>Index.vue</h1>
  </div>
  <div>
    <button @click="hookText = 'Hook Text is Updated!'">Trigger UPDATE HOOKS!</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const hookText = ref('Hooks Text!')
</script>
