<template> 
        
</template>

<script setup>
import { ref } from 'vue';

// Article Store
import { useArticleStore } from '@/stores/articles';
const articleStore = useArticleStore();


const loading = ref(false);
const btnLoad = ref(false);


/// Get first articles ///
loading.value = true;
const collVo = articleStore.adminGetArticles(3)
.finally(()=> {
    loading.value = false;
})


</script>