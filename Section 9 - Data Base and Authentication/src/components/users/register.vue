<template>
    <div class="row justify-content-md-center">
        <div class="col col-lg-5">
            <h1>Register</h1>
            <hr/>
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" v-model="formData.email">
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" v-model="formData.password">
                </div>
           
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    </div>
</template>


<script setup>
  import { AUTH } from '@/firebase/config';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';


  const router = useRouter();
  const register = ref(true);
  const formData = reactive({
    email:'',
    password:''
  });

  const submitForm = () => {
    if(register.value){
      registerUser();
    }
    else {

    }
  }

    // Register User
  const registerUser = async() => {
    try {
      const response = await createUserWithEmailAndPassword(AUTH, formData.email, formData.password);
        if(!response){
          throw new Error("Sorry, something happened!");
        }
        router.push('/'); 
    } 
    catch(error){
      console.log(error.message);
    }
  }

</script>