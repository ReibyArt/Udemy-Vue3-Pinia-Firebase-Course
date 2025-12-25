<template>
    <!-- Dynamic ID  -->
    <!-- http://localhost:3000/users/123 
        or 
     http://localhost:3000/users/ReibyArtBlablabala -->
    <div>User ID: {{ $route.params.id }}</div>
</template>