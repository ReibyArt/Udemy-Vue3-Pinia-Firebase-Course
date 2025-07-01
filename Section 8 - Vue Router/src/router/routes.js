import {createRouter, createWebHistory} from 'vue-router';
import Articles from '@/components/articles/index.vue';
import Contact from '@/components/contact/index.vue';
import Home from '@/components/home.vue';
import Article from '@/components/articles/article.vue';
import NotFound from '@/components/404.vue';
import Notify from '@/components/notify.vue';
import Login from '@/components/login.vue';


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
        {path: '/articles', component: Articles, children: [
            {path: ':articleID', component: Article, props: true},
        ]},
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
        {path: '/contact', components: {
            default: Contact,
            notify: Notify,
        }, name: 'contact'},

        // Redirect path // 
        // {path: '/contact', component: Contact, redirect: '/'},

        {path: '/:NotFound(.*)*', component: NotFound},
        {path: '/login', component: Login},

    ],
    linkActiveClass: 'active'
});

router.beforeEach((to, from, next)=>{

    // User auth
    const isAuth = true;

    if(to.path === '/'){
        next();
    }
    else {
        if(to.path !== '/login' && !isAuth) return next({path:'/login'});
        if(to.path === '/login' && isAuth) return next({path:'/'});
        return next();
    }

    router.afterEach(()=>{
        console.log('After routes')
    })

    
})

export default router;