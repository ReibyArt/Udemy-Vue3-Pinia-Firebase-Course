<template>
    <div class="container">
        <app-carousel/>
        <hr>
        <featured/>
    </div>
</template>

<script setup>
import AppCarousel from '@/utils/carousel.vue';
import Featured from './featured.vue';
import { useArticleStore } from '@/stores/articles';

const articleStore = useArticleStore();

if(!articleStore.homeArticles){
    articleStore.getArticles(5);
}

</script>