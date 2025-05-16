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
          :updateAge="updateAgeFoo"
        />
      </div>
      <button @click="updateName" class="btn">Update Name</button>
    </div>
  </div>
  <div class="new-section">
    <hr />
    <h1>New Section - Provide & Inject: Part one</h1>
    <hr />
  </div>
  <div>
    <Cars :cars="cars" />
  </div>
  <div class="new-section">
    <hr />
    <h1>Slots</h1>
    <hr />
  </div>
  <!-- SLOTS -->
  <div>
    <CarsBrand>
      <template v-slot:brands>
        <ul>
          <li v-for="(brand, index) in brands" :key="index">{{ brand }}</li>
        </ul>
      </template>

      <template v-slot:namedSlot>
        <div>
          <h3>Named Slot</h3>
        </div>
      </template>
      <strong>Default Slot</strong>
    </CarsBrand>
  </div>
  <div class="new-section">
    <hr />
    <h1>Using the Lifecycles</h1>
    <hr />
  </div>
  <!-- Lifcycles -->
  <Life v-if="showIt" />
  <hr />
  <div>
    <button v-on:click="showIt = !showIt">Show/Hide Component</button>
  </div>

  <div class="new-section">
    <hr />
    <h1>Using Dynamic Component</h1>
    <hr />
  </div>
  <hr />
  <div>
    <!-- <Aranel v-if="activeComponent === Aranel" /> -->
    <button v-on:click="activeComponent = Aranel">Aranel is Active (Default)</button>
    <hr />
    <!-- <Reiby v-if="activeComponent === Reiby" /> -->
    <button v-on:click="activeComponent = Reiby">Reiby is Active</button>
    <!-- Short -->
    <!-- INCLUDE и EXCLUDE -- это для кеширования компонентов! -->
    <KeepAlive include="Reiby" exclude="Aranel">
      <component :is="activeComponent"></component>
    </KeepAlive>
  </div>
  <div class="new-section">
    <hr />
    <h1>ТУЦ</h1>
    <hr />
  </div>
  <hr />
</template>

<!-- With Setup in Script! Very nice! -->
<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'
import { shallowRef } from 'vue'

// GET LOCAL COMPONENT //
import Profile from './components/User/Profile.vue'
import Cars from './components/Cars/index.vue'
import CarsBrand from './components/Cars/brands.vue'
import Life from './components/Lifecycle/index.vue'
import Aranel from './components/Players/Aranel.vue'
import Reiby from './components/Players/Reiby.vue'

// VAR //

// Dynamics Component

const activeComponent = shallowRef(Aranel)

// SLOTS //
const brands = reactive(['Mazda', 'Honda', 'Renault'])

// Life //
const showIt = ref(true)

const dataName = reactive({
  alsoKnownAs: 'Scump',
  userlastName: 'Reiby',
  age: 32,
  parents: {
    father: 'Mario',
    mother: 'Princess',
    brother: 'Luigi',
    sister: 'Mushroom',
  },
})
const nameMy = ref('Hello, ReibyArtGames with setup in script!')

// Provide & Inject part one
const cars = reactive([
  { model: 'Logan', brand: 'Renault' },
  { model: 'V10', brand: 'Volvo' },
  { model: 'Patrol', brand: 'Nissan' },
])

// FUNCTIONS //

const alertHello = () => {
  alert('Hello From App And Profile.vue!')
}
const updateName = () => {
  dataName.alsoKnownAs = 'Games ((From Component App!))'
}
// Changing Age
const updateAgeFoo = (value) => {
  dataName.age = value
}
</script>

<!-- Style is Global!  -->
<!-- Scoped --- this is for a local component! -->
<style scoped>
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
.new-section {
  background-color: rgb(49, 190, 91);
}

li {
  color: red;
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
