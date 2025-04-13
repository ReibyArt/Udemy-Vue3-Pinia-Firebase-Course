<!-- App -->
<template>
  <div>
    <app-header />
    <div class="container">
      <div>
        <Profile :knownAs="dataName.alsoKnownAs" 
        :userlastName="dataName.userlastName"/>
      </div>
      <button @click="updateName" class="btn">Update Name</button>
    </div>
  </div>
</template>

<!-- With Setup in Script! Very nice! -->
<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'

// GET LOCAL COMPONENT //
import Profile from './components/User/Profile.vue'

// VAR //
const dataName = reactive({
  alsoKnownAs: 'Scump (From Parent Component App!)',
  userlastName: 'Art',
})
const nameMy = ref('Hello, ReibyArtGames with setup in script!')
// FUNCTIONS //


const updateName = () => {
  dataName.alsoKnownAs = 'Games ((From Component App!))'

}
</script>

<!-- Style is Global!  -->
<!-- Scoped --- this is for a local component! -->
<style>
body {
  padding: 0;
  margin: 0;
  font-family: 'Robot', sans-serif;
}
.container {
  min-height: 84vh;
  box-sizing: border-box;
  padding: 20px;
}
.btn {
  padding: 10px;
  margin: 10px;
}
</style>









<!-- Without setup in script -->
<!-- <script>
  export default {
    setup() {
      const nameMy = 'Hello, ReibyArtGames!'
      return {
        nameMy,
      }
    }
  }
</script> -->