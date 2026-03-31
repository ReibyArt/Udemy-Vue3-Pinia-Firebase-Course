<template>
    <h1>Adding Employees</h1>
    <form class="mt-4" @submit.prevent ="submitForm">
        <div class="mb-3">
            <label for="fullname" class="form-label">Full Name</label>
            <input v-model="fullname" type="text" class="form-control" id="fullname" required>
        </div>
        <div class="mb-3">
            <label for="fullname" class="form-label">Position</label>
            <input v-model="position" type="text" class="form-control" id="fullname" required>
        </div>
        <div class="mb-3">
            <label for="fullname" class="form-label">Age</label>
            <input v-model="age" type="number" class="form-control" id="fullname" required>
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

function submitForm() {
    console.log(formData.value)
}
</script>