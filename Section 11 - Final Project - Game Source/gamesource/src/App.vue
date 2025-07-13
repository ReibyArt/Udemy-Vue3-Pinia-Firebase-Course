<template>
  <!--  Loader  -->
  <div class="text-center m-3" v-if="loading">
    <v-progress-circular
    indeterminate
    color="primary"
    ></v-progress-circular>
  </div>
  <div v-else>
    <Header/>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import Header from './components/navigation/header.vue';
import { firstLoad } from './composables/auth';

const  { loading } = firstLoad();
 
</script>