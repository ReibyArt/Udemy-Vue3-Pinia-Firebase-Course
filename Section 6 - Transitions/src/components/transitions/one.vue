<template>
    <transition>
        <div class="p-3 mb-2 bg-success text-white"
            v-if="data.display"
        >
            Hello!
        </div>
    </transition>
    <button class="btn btn-primary" 
        @click="data.display = !data.display"
    >
        Toggle One
    </button>
    <hr/>
        <transition>
        <div class="p-3 mb-2 bg-warning text-white"
            v-if="data.displayTwo"
        >
            Hello Two!
        </div>
    </transition>
    <button class="btn btn-primary" 
        @click="data.displayTwo = !data.displayTwo"
    >
        Toggle Two
    </button>
</template>

<script setup>
   import { reactive } from 'vue';

   const data = reactive({
    display: false,
    displayTwo: true  
   })
</script>

<style >

/* On */
.v-enter-from,
.v-leave-to {
    opacity: 0;
}
.v-enter-active,
.v-leave-active {
    transition: 3s;
}
.v-enter-to,
.v-leave-from {
    opacity: 1;
}

/* Off */
/* .v-leave-from {
    opacity: 1;
}
.v-leave-active {
    transition: 2s;
}
.v-leave-to {
    opacity: 0;
} */
</style>