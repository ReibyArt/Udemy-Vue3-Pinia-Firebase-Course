<template>
<div class="signin_container">
<!--  Loader  -->
    <Form @submit="onSubmit" :validation-schema="formShema">
        <h1 v-text="!type ? 'Sign in' : 'Register' "></h1>

            <!-- Email -->
        <div class="form-group">
            <Field 
                name="email" 
                :value="'reibyart@gmail.com'" 
                v-slot="{field, errors, errorMessage}"
            >
                <input 
                    type="text"
                    class="form-control"
                    placeholder="Enter your email"
                    v-bind="field"
                    :class="{'is-invalid' :errors.length !==0}"
                />
                <div
                    class="input-alert"
                    v-if="errors.length !==0"
                >
                    {{ errorMessage }}
                </div>        
            </Field>
        </div>
        
        <!-- Password -->
        <div class="form-group">
            <Field 
                name="password" 
                :value="'test123'" 
                v-slot="{field, errors, errorMessage}"
            >
                <input 
                    type="password"
                    class="form-control"
                    placeholder="Enter your password"
                    v-bind="field"
                    :class="{'is-invalid' :errors.length !==0}"
                />
                <div
                    class="input-alert"
                    v-if="errors.length !==0"
                >
                    {{ errorMessage }}
                </div>
            </Field>
        </div>
        <button 
            type="submit"
            class="btn mb-3 btn-block"
            v-text="!type ? 'Sign in' : 'Register'"
        >
        </button>
        <hr/>
        <div
            class="form_swap"
            @click="type = !type"       
        >
            <span v-if="type">
                I want to <b>Sign In</b>
            </span>
            <span v-else>
                I want to <b>Register</b>
            </span>
        </div>
    </Form>
</div>

</template>

<script setup>
 import { Field, Form } from 'vee-validate';
 import * as yup from 'yup';
 import { ref } from 'vue';

 // AUTH STORE //
 import { useUserStore } from '@/stores/user';
 const userStore = useUserStore();

// // //
const type = ref(false);

const formShema = yup.object({
    email: yup.string()
    .required('The email is required!')
    .email('Not a valid email!'),
    password: yup.string()
    .required('The password is required!')
});

function onSubmit(values, { resetForm }) {
    // useUserStore.register(values);
}
</script>