<template>
    <div>
        <h1>Static Routes</h1>
        <h1>Hello Home!</h1>
        <nuxt-link :to="'https://google.com'" target="_blank"> Go to google </nuxt-link>
        <hr/>
        <button @click="router.push('/contact')">Java Script Routing Go To Contact</button>
    </div>
</template>

<script setup>
    const router = useRouter();
</script>