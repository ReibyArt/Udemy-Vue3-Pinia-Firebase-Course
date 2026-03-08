<template>
    <div>
        <NuxtLayout>
        <h1>My Own Custom 404 Page</h1>
        <h1>Status Code Of Error: {{ error.statusCode }}</h1>
        <h1>Error Message: {{ error.message }}</h1>
        </NuxtLayout>
    </div>
</template>

<script setup>
    defineProps(['error']);
</script>