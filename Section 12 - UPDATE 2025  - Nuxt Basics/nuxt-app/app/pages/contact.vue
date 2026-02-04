<template>
    <div>
        <h1>Static Routes</h1>
        <h1>Contact Page</h1>
        <button @click="setPageLayout('default')">Change Layout</button>
    </div>
</template>

<script setup>
    // UseHead support reactivity! This is imoprtant!!!!

    // const title = ref('Contact Reactivity From UseHead');

    // setTimeout(() => {
    //     title.value = 'New Contact From SetTimeout'
    // }, 2500);

    // useHead({
    //     title: title
    // });


    /// META

    // Is not reactive!

    useSeoMeta({
        title: 'Title From Meta!',
        ogTitle: 'OG Title',
        description: 'Some Description From Meta',
        ogDescription: 'Some OG Description From Meta'
    }) 

    definePageMeta({
        layout: 'our-own-layout'
    })
</script>