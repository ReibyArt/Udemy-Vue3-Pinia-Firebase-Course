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
  // useHead({
  //   title: "My Awesome App",
  //   meta: [{ name: 'description', content: 'Some Content Description'}],
  //   link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.8/css/bootstrap-grid.min.css'}]
  // })

</script>