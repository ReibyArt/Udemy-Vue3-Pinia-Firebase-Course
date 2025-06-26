<template>
<div>
   <button class="btn btn-primary" @click="status = !status">
      Toggle Status
   </button>
</div>
<transition 
   mode="out-in" 
   name="custom" 
   enter-active-class="dog" 
   leave-active-class="cat"
   @before-enter="beforeEnter"
   @enter="enter"
   @after-enter="afterEnter"
   @before-leave="beforeLeave"
   @leave="leave"
   @after-leave="afterLeave"
>
    <!-- Альтернативный режим - in-out (сначала появляется новый элемент, потом исчезает старый), но out-in используется чаще. -->
   <div class="p-3 mb-2 bg-danger text-white" v-if="!status" key="status_off">
      OFF
   </div>
      
   <div class="p-3 mb-2 bg-success text-white" v-else="status" key="status_on">
      ON
   </div>
</transition>

</template>

<script setup>
   import { ref } from 'vue';
const status = ref(false);

function beforeEnter(el) {console.log("1 - beforeEnter", el)}
function enter(el) {console.log("2 - enter", el)}
function afterEnter(el) {console.log("3 - afterEnter", el)}
function beforeLeave(el) {console.log("4 - beforeLeave", el)}
function leave(el) {console.log("5 - leave", el)}
function afterLeave(el) {console.log("6 - afterLeave", el)}

</script>

<style>

/* On */
.custom-enter-from,
.custom-leave-to {
    opacity: 0;
}
.custom-enter-active,
.custom-leave-active {
    transition: 3s;
}
.custom-enter-to,
.custom-leave-from {
    opacity: 1;
}

/* Example */

.dog, .cat{
   transition: 1s;
}

/* Transition Hooks */
/* Это всё callback functions */
/* 
@before-enter="beforeEnter"
@enter="enter"
@after-enter="afterEnter"
@before-leave="beforeLeave"
@leave="leave"
@after-leave="afterLeave"
*/

</style>