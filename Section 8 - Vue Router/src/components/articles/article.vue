<template>
  <router-link to="/articles/3"> Go to article </router-link>
  <div v-if="Object.keys(article).length !== 0">
    <!-- <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4 fst-italic">
          Incididunt ut labore et dolore magna aliqua
        </h1>
        <p class="lead my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation
        </p>
      </div>
    </div> -->
    <div class="row g-5">
      <div class="col-md-8">
        <h3 class="pb-4 mb-4 fst-italic border-bottom">{{ article.title}}</h3>
  
        <article class="blog-post">
          <p class="blog-post-meta">
            {{article.date}} <strong>{{ article.author}}</strong>
          </p>
          
          <div v-html="article.content">
          
          </div>

          <!-- <p>
            Consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?
          </p>
          <ul>
            <li>Nam libero tempore, cum soluta nobis</li>
            <li>Sed ut perspiciatis unde omnis iste natus</li>
            <li>Nores eos qui ratione voluptatem sequi ne</li>
          </ul>
          <p>
            I et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt mollitia animi, id est laborum et
            dolorum fuga. Et harum quid.
          </p> -->
        </article>
      </div>
  
      <div class="col-md-4">
        <div class="position-sticky" style="top: 2rem">
          <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">About</h4>
            <p class="mb-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </template>

  <script setup>
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';


const route = useRoute();

// Routes props
const props = defineProps(['articleID']);
console.log(props.articleID);

const article = ref({});

const loadArticleData = (articleID) => {
  axios.get(`http://localhost:3004/articles/${articleID}`)
  .then(response => {
    article.value = response.data;
  })
}

// Watch Отслеживает изменение в articleID и меняет, если они произошли
// <router-link to="/articles/3"> Go to article </router-link> // 
// watch(
//   () => route.params.articleID,
//   async newId => {
//     loadArticleData(newId);
// })

// Можно использовать onBeforeRouteUpdate или watch
onBeforeRouteUpdate(async (to, from) =>{
  loadArticleData(to.params.articleID)
})

onMounted(()=>{
  loadArticleData(route.params.articleID);
});
// console.log(route.params);

</script>