<template>
    <h1>Adding Employees</h1>
    <form class="mt-4" @submit.prevent ="submitForm">
        <div class="mb-3">
            <label for="fullname" class="form-label">Full Name</label>
            <input v-model="formData.fullname" type="text" class="form-control" id="fullname" required>
        </div>
        <div class="mb-3">
            <label for="fullname" class="form-label">Position</label>
            <input v-model="formData.position" type="text" class="form-control" id="fullname" required>
        </div>
        <div class="mb-3">
            <label for="fullname" class="form-label">Age</label>
            <input v-model="formData.age" type="number" class="form-control" id="fullname" required>
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
 const request = await $fetch('/api/employees?example=true&example=false', {
    method: 'post',
    body: formData.value,
 }); 
 console.log(request);
}
</script>