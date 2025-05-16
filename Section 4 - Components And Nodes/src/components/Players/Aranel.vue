<template>
  <div>
    <h3>Aranel Component is on</h3>
  </div>
</template>

<script setup>
import { onUnmounted, onActivated, onDeactivated } from 'vue'

onUnmounted(() => {
  console.log('Aranel onUnmounted')
})

onActivated(() => {
  console.log('Aranel onActivated!')
})

onDeactivated(() => {
  console.log('Aranel onDeactivated!')
})
</script>
