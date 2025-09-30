<template>
    <v-row v-masonry transition-duration="0.3s">
        <v-col v-masonry-tile v-for="(article, index) in articleStore.getHomeArticles" :key="article.id" sm="4">
            <!-- Cards  -->
            <v-card>
                <v-img
                height="300"
                :src="article.image"
                cover
                class="text-white"
                >
                </v-img>
                <v-card-item>
                    <v-card-title>
                        {{ article.title }}
                    </v-card-title>
                    <v-card-subtitle>
                        {{ article.game }}
                    </v-card-subtitle>
                </v-card-item>
                <v-card-text>
                    {{ article.excerpt }}
                </v-card-text>
                <v-card-actions>
                    <RouterLink :to="{name: 'article', params:{id:article.id}}">
                        <v-btn>
                            Read Article
                        </v-btn>
                    </RouterLink>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>

import { useArticleStore } from '@/stores/articles';
    const articleStore = useArticleStore();

</script>