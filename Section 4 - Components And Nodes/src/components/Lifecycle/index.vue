<template>
  <div>
    <h1>Lifecycles Hook</h1>
  </div>
  <div>
    <h1>{{ text }}</h1>
    <button v-on:click="text = 'Changed Text...'">Trigger update</button>
  </div>
</template>

<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
} from 'vue'

// VAR //
const text = ref('Some text')

// HOOKS //
onBeforeMount(() => {
  // console.log('1 --> onBeforeMount');
})

onMounted(() => {
  // console.log('2 --> onMounted');
})

onBeforeUpdate(() => {
  console.log('3 --> onBeforeUpdate')
})

onUpdated(() => {
  console.log('4 --> onUpdated')
})

onBeforeUnmount(() => {
  console.log('5 --> onBeforeUnmount')
})

onUnmounted(() => {
  console.log('6 --> onUnmounted')
})
</script>
