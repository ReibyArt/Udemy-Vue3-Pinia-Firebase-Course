<template>
  <nuxt-layout></nuxt-layout>
<hr>
  <!-- <nuxt-layout name='our-own-layout'></nuxt-layout> -->
  <div>
    <nuxt-page></nuxt-page>
  </div>
<hr/>
  <card></card>

<!-- Different ways to import component -->
<hr/>
  <user-profile></user-profile>
<hr/>
  <UserProfile/>
<hr/>
  <Profile/>
<hr/>
  <UserProfile/>
<hr/>
<!-- Other My Folder Components -->
<hr/>
  <OtherFolderComponent/>
</template>


<script setup>

// Import components different ways
import Card from './components/card.vue';
import Profile from './components/user/profile.vue';
import { UserProfile } from '#components';
import OtherFolderComponent from './otherComponents/otherFolderComponent/other.vue';


  // UseHead support reactivity! This is imoprtant!!!!
  useHead({
    title: "My Awesome App",
    meta: [{ name: 'description', content: 'Some Content Description'}],
    link: [{ rel: 'stylesheet', href: '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">'}]
  })

</script>