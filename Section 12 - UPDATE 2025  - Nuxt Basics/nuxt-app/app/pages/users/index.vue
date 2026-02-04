<template>
    <div>
        <h1>Nested Routes</h1>
        <h1>Hello User!</h1>
    </div>
</template>

<script setup>

    const route = useRoute();
    console.log(route.meta);
    useHead(route.meta);

    definePageMeta({
        title: 'Users From definePageMeta',
        meta: [
            {name: 'description', content: 'Some description...'}
        ],
        something: 'Hey!'
    })
</script>