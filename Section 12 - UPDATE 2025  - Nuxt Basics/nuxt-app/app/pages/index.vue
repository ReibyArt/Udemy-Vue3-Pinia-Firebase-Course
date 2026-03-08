<template>
    <div>
        <h1>Static Routes</h1>
        <h1>Hello Home!</h1>
        <nuxt-link :to="'https://google.com'" target="_blank"> Go to google </nuxt-link>
        <hr/>
        <button @click="router.push('/contact')">Java Script Routing Go To Contact</button>
    </div>
    <hr/>
    <!-- COMPOSABLES -->
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
    <hr/>
    <!-- UTILS -->
    <h1>Hello From Utils!</h1>
    <div>
        <h2>{{ getNumber(28) }}</h2>
        <hr/>
        <h2>Export Default Function - {{ getName('Reiby Art Games') }} </h2>
    </div>
    <hr>
    <div>
        <h1>Plugins</h1>
        <h2>Red: {{ $red  }}</h2>
        <h2>Green: {{ $green  }}</h2>
        <h2>Blue: {{ $blue }}</h2>
        <h1>Plugins: Function</h1>
        <button @click="$ourFunc('Reiby!')"> Our Func From Plugins!</button>
    </div>
    <div>
        <h1>Register A Global Component MyButton From Plugins</h1>
        <MyButton> Click Me </MyButton>
    </div>
    <hr>
    <div>
        <!-- Next Lesson -->
         <h2>Next Lesson</h2>
    </div>
</template>

<script setup>

    // Plugins From Script
    const {$red, $green, $blue} = useNuxtApp();
    console.log($red, $green, $blue);

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