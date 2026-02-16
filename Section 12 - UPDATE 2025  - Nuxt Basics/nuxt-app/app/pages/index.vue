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
    // Global Style 
    // import '~/assets/main.css';
    const router = useRouter();

    // Import Style
    // useHead({
    //     link: [{
    //         rel: 'stylesheet',
    //         href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.8/css/bootstrap-grid.min.css',
    //     }]
    // })
</script>

<style scoped>
    /* scoped - only this file style */
    @import '~/assets/main.css';
</style>