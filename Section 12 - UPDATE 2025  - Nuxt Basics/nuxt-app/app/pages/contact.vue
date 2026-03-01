<template>
    <div>
        <h1>Static Routes (SASS Style)</h1>
        <h2>Contact Page (SASS Style)</h2>
        <h3 :class="$style.module">Module CSS Class Style</h3>
        <button @click="setPageLayout('default')">Change Layout</button>
    </div>
</template>

<style scoped lang="scss" module>
    @use '~/assets/colors';

    h1 {
        color: colors.$alpha;
    }

    h2 {
        color: colors.$beta;
    }

    .module {
        color: blueviolet;
    }

</style>

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
        layout: 'our-own-layout',
        middleware: ['03-name-middleware', // Our named middleware

        function localMiddleware(to, from) {
            console.log('Local Contact Middleware');
        }
        ]
    })
</script>