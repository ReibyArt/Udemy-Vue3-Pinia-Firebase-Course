<template>
    <h1>Adding Employees</h1>
    <form class="mt-4" @submit.prevent ="submitForm">
        <div class="mb-3">
            <label for="fullname" class="form-label">Full Name</label>
            <input v-model="formData.fullname" type="text" class="form-control" id="fullname" required>
        </div>
        <div class="mb-3">
            <label for="fullname" class="form-label">Position</label>
            <input v-model="formData.position" type="text" class="form-control" id="position" required>
        </div>
        <div class="mb-3">
            <label for="fullname" class="form-label">Age</label>
            <input v-model="formData.age" type="number" class="form-control" id="age" required>
        </div>
        <button type="submit" class="btn btn-primary">Add Emloyee</button>
    </form>
        
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
    fullname: "",
    position: "",
    age: null,
});

async function submitForm() {

try {
    // Request - Body and Query in api/employess
    await $fetch('/api/employees', {
    method: 'POST',
    body: formData.value,
 }); 
//  console.log(request);
} catch (error) {
       console.log(error); 
} 
}
</script>