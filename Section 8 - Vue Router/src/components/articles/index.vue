<template>
    <div>
        <router-view></router-view>
    </div>
    <hr>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    
        <!--  ITEM -->
        <div class="col" v-for="(article, index) in data.articles " :key="article.id">
            <div class="card shadow-sm">
                <img class="bd-placeholder-img card-img-top" :src="article.img + '?' + index"/>
                <div class="card-body">
                    <p>{{ article.excerpt}}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <router-link :to="'/articles/' + article.id">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        
    </div>
    </template>

<script setup>
    import axios from 'axios';
    import { onMounted, reactive } from 'vue';

    const data = reactive({
        articles: [],
    });

    onMounted(()=> {
        axios.get('http://localhost:3004/articles')
        .then(response => {
            data.articles = response.data
             console.log('I am here' + data);
        })
    })
</script>