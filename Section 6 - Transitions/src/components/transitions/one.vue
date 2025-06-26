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
        <hr/>
        <h3 class="p-2 mb-2">Named Transitions</h3>
        <transition name="slide">
        <div class="p-3 mb-2 bg-success text-white"
            v-if="data.displayThree"
        >
            Hello Three!
        </div>
    </transition>
    <button class="btn btn-primary" 
        @click="data.displayThree = !data.displayThree"
    >
        Toggle Three
    </button>
     <hr/>
        <h3 class="p-2 mb-2">Keyframes Transitions</h3>
        <transition name="slideup">
        <div class="p-3 mb-2 bg-success text-white"
            v-if="data.displayFour"
        >
            Hello Four!
        </div>
    </transition>
    <button class="btn btn-primary" 
        @click="data.displayFour = !data.displayFour"
    >
        Toggle Three
    </button>
</template>

<script setup>
   import { reactive } from 'vue';

   const data = reactive({
    display: false,
    displayTwo: true,
    displayThree: true,
    displayFour: true   
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

/* Named Transitions */

.slide-enter-from
{
    transform: translate(50px);
    opacity: 0;
}
.slide-enter-active {
    transition: all 2s ease;
}
.slide-enter-to
{
    opacity: 1;
}

/* leave */
.slide-leave-from
{
    opacity: 1;
    background-color: rgb(9, 255, 0) !important;
}
.slide-leave-active {
    transition: all 2s ease;
}
.slide-leave-to
{
    background-color: rgb(247, 243, 14) !important;
    transform: translate(200px);
    opacity: 0;
}

/* Keyframes */

.slideup-enter-active {
    animation: slideUp 1s ease-in-out;
}
.slideup-leave-active {
    animation: slideDown 2s ease-in-out
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideDown {
    from {
        opacity: 1;
        transform: translateY(0);

    }
    to {
         opacity: 0;
        transform: translateY(10px);
    }
}


</style>