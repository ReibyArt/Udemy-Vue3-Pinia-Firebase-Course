<!-- App -->
<template>
  <div>
    <app-header />
    <div class="container">
      <div>
        <Profile 
        :knownAs="dataName.alsoKnownAs" 
        :userlastName="dataName.userlastName"
        :userAge="dataName.age"
        :userParents="dataName.parents"
        @update-lastname="dataName.userlastName = $event"
        @say-hello="alertHello"
        :updateAge="updateAgeFoo"/>
        
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
  alsoKnownAs: 'Scump',
  userlastName: 'Reiby',
  age: 32,
  parents: {
    father: 'Mario',
    mother: 'Princess',
    brother: 'Luigi',
    sister: 'Mushroom',
  }
})
const nameMy = ref('Hello, ReibyArtGames with setup in script!')
// FUNCTIONS //

const alertHello = ()=>{
  alert('Hello From App And Profile.vue!');
}
const updateName = () => {
  dataName.alsoKnownAs = 'Games ((From Component App!))'
}
// Changing Age
const updateAgeFoo = (value) =>{
  dataName.age = value;
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