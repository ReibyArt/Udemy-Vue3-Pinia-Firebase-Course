<template>
  <div class="user_profile">
    <h3>User information</h3>
    <ul>
      <li><span>Name: </span> {{ nameInProfile }}</li>
      <li><span>Last Name: </span> {{ userlastName }}</li>
      <li><span>Known As: </span> {{ knownAs }}</li>
      <li><span>Age: </span> {{ userAge }}</li>
      <hr>
      <h3>Family:</h3>
      <ul>
        <li v-for="(value, key, index) in userParents" :key="index">
          <span> {{ key }} - </span> {{ value }},
        </li>
      </ul>
    </ul>
    <hr>
    <button @click="emit('update-lastname', 'Holmes')">Update From Child</button>
    <hr>
    <button @click="sayHello">Press to Hello Button</button>
    <hr>
    <button @click="updateAge(40)"> Update Age Up!</button>
  </div>
</template>

<script setup>
// Using Emmits
const emit = defineEmits(['update-lastname', 'say-hello']);
// Using Object 
const props = defineProps({ 
userlastName: {
  type: String,
  required: true,
  default: 'N/A - Missing somthing!'
}, 
knownAs: {
  type: String,
  validator(value) {
    if(value === 'Scump' || value === 'Shredder'){
      return true;
    }
    else {
      return false;
    }
  }

},
userAge: [Number, String],
userParents: Object,
updateAge: Function,
})

// Trigger function
const sayHello = ()=>{
  emit('say-hello');
}
const nameInProfile = 'Art (Profile Component)'




// const updateLastName = () => {
//   emit('update-lastname', 'Holmes');
// }
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
