<template>
    <div>
        <!-- Simple Example -->
        <!-- http://localhost:3000/users/123/name -->
         <!-- Here Another way -->
         <!-- user-[id] -->
         <!-- http://localhost:3000/users/user-123/name -->
        User ID and name
        <p>ID: {{ $route.params.id }}</p>
        <p>Name: {{  $route.params.name }}</p>
    </div>
</template>
    <!-- http://localhost:3000/users/user-123/Reiby -->

<script setup>
    const route = useRoute();
    console.log(route.params.id);
    console.log(route.params.name);

</script>