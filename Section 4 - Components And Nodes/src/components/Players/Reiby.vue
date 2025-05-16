<template>
  <div>
    <h3>Reiby Component is on</h3>
  </div>
</template>

<script setup>
import { onUnmounted, onActivated, onDeactivated } from 'vue'

onUnmounted(() => {
  console.log('Reiby onUnmounted')
})

onActivated(() => {
  console.log('Reiby onActivated!')
})

onDeactivated(() => {
  console.log('Reiby onDeactivated!')
})
</script>
