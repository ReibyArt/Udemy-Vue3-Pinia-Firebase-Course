<template>
  <div>
    <h3>Reiby Component is on</h3>
    <teleport to="#teleport">
      <Modal></Modal>
    </teleport>
  </div>
</template>

<script setup>
import Modal from '@/components/Utilles/modal.vue'
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
