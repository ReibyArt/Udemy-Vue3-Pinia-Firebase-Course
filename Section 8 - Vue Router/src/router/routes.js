import {createRouter, createWebHistory} from 'vue-router';
import Articles from '@/components/articles/index.vue';
import Contact from '@/components/contact/index.vue';
import Home from '@/components/home.vue';
import Article from '@/components/articles/article.vue';
import NotFound from '@/components/404.vue';


// Props Function

// const propsBack = (route) => {
//     return{
//         crazy: route.path + 'some other route!'
//     }
// }

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', component: Home},
        {path: '/articles', component: Articles},
        {path: '/articles/:articleID', component: Article, props: true},
        //
        // {path: '/articles/:articleID', component: Article, props: {
        //     crazy: 'ReibyArtGames'
        // }}  - key передаём в article ( defineProps(['OUR_KEY']); ); 
        //

        // Props with function // 

        //
        // {path: '/articles/:articleID', component: Article, props: propsBack}
        // }}  - key передаём в article ( defineProps(['OUR_KEY']); ); 
        //
        {path: '/contact', component: Contact},

        // Redirect path // 
        // {path: '/contact', component: Contact, redirect: '/'},

        {path: '/:NotFound(.*)', component: NotFound},
    ],
    linkActiveClass: 'active'
});

export default router;