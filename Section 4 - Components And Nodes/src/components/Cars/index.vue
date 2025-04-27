<template>
  <div>
    <h1>Hello Cars!</h1>
    <hr />
    <CarsList :cars="cars" />
  </div>
</template>

<script setup>
import CarsList from './list.vue'

const props = defineProps(['cars'])
</script>
