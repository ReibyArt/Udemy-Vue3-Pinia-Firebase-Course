<template>
    <div>
        <h1>Static Routes</h1>
        <h1>Hello Home!</h1>
        <nuxt-link :to="'https://google.com'" target="_blank"> Go to google </nuxt-link>
        <hr/>
        <button @click="router.push('/contact')">Java Script Routing Go To Contact</button>
    </div>
    <hr/>
    <div >
        <ul v-if="!users.loader.value">
            <li v-for="user in users.names.value" :key="user">
               User Name From Composables: {{ user }}
            </li>
        </ul>
        <div v-else>Loading Twitch....</div>
    </div>
    <hr/>
    <button @click="users.getName">Add Twitch in the array</button>
</template>

<script setup>
    // Global Style 
    // import '~/assets/main.css';
    const router = useRouter();
    const users = getUser('Twitch');
    // Import Second Composables Folder Or From Global index.js inside composables folder
    // import { SecondCompFunc } from '~/composables/ourSecondComposablesFolder/secondComp.js';
    console.log(SecondCompFunc());

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