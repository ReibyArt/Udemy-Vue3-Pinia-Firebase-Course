<template>
  <h4>Our Directives</h4>
  <div v-awesome></div>
  <div v-awesome="'Argument inside directive!'"></div>
  <hr />
  <h5>Default Color</h5>
  <div v-awesome="textToRender"></div>
  <hr />
  <h5>If Statement</h5>
  <div v-awesome:red="textToRender"></div>
  <div v-awesome:blue="textToRender"></div>
  <div v-awesome:green="textToRender"></div>
  <hr />
  <h4>With Modifiers</h4>
  <div v-awesome.red.big="textToRender"></div>
  <div v-awesome.blue.small="textToRender"></div>
  <div v-awesome.green.normal="textToRender"></div>
</template>

<script setup>
import { ref } from 'vue'
const textToRender = ref('Text from script in directive.vue!')
</script>
