<template>
    <h1>Cars Page [Dynamic Routes]</h1>
    <h2>http://localhost:3000/cars</h2>
    <p>{{ $route.params.name }}</p>
</template>

<script setup>
     const route = useRoute();
     console.log(route.params.name);
</script>