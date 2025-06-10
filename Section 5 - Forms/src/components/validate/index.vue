<template>
  <Form @submit="handleSubmit">
    <div class="mb-3">
        <label for="name">Name</label>
        <Field 
          name="name" 
          :rules=[isRequired,validateName]
          placeholder="Enter Your Name.."
          class="form-control"
        />

        <ErrorMessage name="name" as="div" v-slot="{message}">
          <div class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </ErrorMessage>
    </div>

    <button class="btn btn-primary">
      Submit
    </button>
    </Form>
</template>

<script setup>

import {Field, Form, ErrorMessage} from 'vee-validate'

const isRequired = (value) => {
  if(!value) {
    return 'This field is required!'
  }
  return true;
}
const validateName = (value) => {
  if(value !== 'ReibyArt') {return true}
  return 'You are not allowed ReibyArt!'
}

function handleSubmit (values, {resetForm}) {
  console.log(values);
  resetForm();
}

</script>