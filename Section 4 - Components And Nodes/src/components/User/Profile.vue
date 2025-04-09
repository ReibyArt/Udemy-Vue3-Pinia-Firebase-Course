<template>
  <div class="user_profile">
    <h3>User information</h3>
    <ul>
      <li><span>Name: </span> {{ nameInProfile }}</li>
      <li><span>Last Name: </span> {{ lastName }}</li>
      <li><span>Known As: </span> {{ knownAs }}</li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps(['name', 'lastName', 'knownAs'])
const nameInProfile = 'Reiby (Profile Component)'
</script>

<style scoped>
span {
  font-weight: 800;
}
.user_profile {
  border: 2px solid #42cf42;
  padding: 10px;
}
</style>
