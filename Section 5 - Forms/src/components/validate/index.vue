<template>
  <Form @submit="handleSubmit" :validation-schema="formSchema">
    <div class="mb-3">
        <label for="name">Name</label>
        <Field 
          name="name" 
          placeholder="Enter Your Name.."
          class="form-control"
        />

        <ErrorMessage name="name" as="div" v-slot="{message}">
          <div class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </ErrorMessage>
    </div>
    <div class="mb-3">
        <label for="name">Email</label>
        <Field 
          name="email" 
          placeholder="Enter Your email.."
          class="form-control"
        />

        <ErrorMessage name="email" as="div" v-slot="{message}">
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

import {Field, Form, ErrorMessage} from 'vee-validate';
import * as yup from 'yup';

const formSchema = yup.object({
  name: yup.string().required('The name is required!').max(10,'Sorry max of 10!'),
  email: yup.string().required('Press Enter Your Email!').min(10, 'Min 10 characters!').max(30, 'Max 15 characters!')
});



// const isRequired = (value) => {
//   if(!value) {
//     return 'This field is required!'
//   }
//   return true;
// }
// const validateName = (value) => {
//   if(value !== 'ReibyArt') {return true}
//   return 'You are not allowed ReibyArt!'
// }

function handleSubmit (values, {resetForm}) {
  console.log(values);
  resetForm();
}


</script>