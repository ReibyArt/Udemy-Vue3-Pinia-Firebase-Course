<template>
    <div class="container">
        <app-carousel/>
    </div>
</template>

<script setup>
import AppCarousel from '@/utils/carousel.vue';
import { useArticleStore } from '@/stores/articles';

const articleStore = useArticleStore();

if(!articleStore.homeArticles){
    articleStore.getArticles(5);
}

</script>