<template>
    <div v-if="articleStore.getFeaturesSlides">
        <carousel
            :items-to-show="1"
            :wrap-around="true"
            class="p_top"
        >
        <slide v-for="slide in articleStore.getFeaturesSlides" :key="slide.id">
            <div class="slider_bck" :style="{background:`url(${slide.image})`}">
                <div class="slide_content">
                    <div class="item">
                        <div>{{ slide.title }}</div>
                        <div>{{ slide.excerpt }}</div>
                    </div>
              
                </div>
            </div>
        </slide>
        <template #addons>
            <Navigation />
            <Pagination />
        </template>
        </carousel>
    </div>
</template>

<script setup>
// Carousel
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

// Article Store
import { useArticleStore } from '@/stores/articles'; 
const articleStore = useArticleStore();

</script>

<style>
.carousel {
  --vc-pgn-background-color: white;
  --vc-pgn-active-color: red;
  --vc-pgn-border-radius: 10px;
  --vc-pgn-height: 10px;
  --vc-pgn-width: 10px;
}
</style>