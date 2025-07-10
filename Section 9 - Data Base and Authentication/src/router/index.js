import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/home.vue'
import Register from '../components/users/register.vue'
import AddArticle from '../components/admin/add_article.vue'
import UpdateArticle from '@/components/admin/update_article.vue'

import { AUTH } from '@/firebase/config'


// Route Guards //
const isAuth = (to, from, next) => {
  let user = AUTH.currentUser;
  if(!user){
    next({ path: '/users/register'});
    return;
  }
  next();
  return;
}

const isLoggedIn = (to, from, next) => {
  let user = AUTH.currentUser;
 if(user){
    next({ path: '/'});
    return;
  }
  next();
  return;
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/users/register', component: Register, beforeEnter: isLoggedIn },
    { path: '/admin/add_article', component: AddArticle, beforeEnter: isAuth },
    { path: '/admin/update_article/:id', component: UpdateArticle, beforeEnter: isAuth},
  ]
})

export default router