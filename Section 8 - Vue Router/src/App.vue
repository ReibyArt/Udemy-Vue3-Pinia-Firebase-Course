<template>
  <app-header></app-header>
        <div class="container">
          <router-view></router-view>
          <hr>
          <router-view name="notify"/>
        </div>
</template>

<script setup>
  // import HomeComponent from './components/home.vue';
  // import ArticlesMain from './components/articles/article.vue'
  // import ArticleComp from './components/articles/index.vue'
  // import ContactComponent from './components/contact/index.vue'
</script>