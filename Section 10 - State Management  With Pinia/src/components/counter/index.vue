<template>
    <div class="px-4 py-5 my-5 text-center">
      <h1 class="display-5 fw-bold">Count</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">{{ count }}</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3"
          @click="add">
            +
          </button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4"
           @click="sub">
            -
          </button>
        </div>
      </div>
      <div>
        <button
        type="button" 
        class="btn btn-outline-secondary px-3 py-3 my-4 text-center"
        @click="getPrizeHandler">
        Get Prize
      </button>
      <p class="display-5 fw-bold"> Attemts: {{  store.getAttampts }}</p>
      </div>
      
    </div>
  </template>

<script setup>
  import { computed } from 'vue';
  import { useCounterStore } from '@/store/counter'

  const store = useCounterStore();

  // Computed Properties
  const count = computed(() => store.getCount);

  // Mutations
  const add = () => {
    store.counter++
  }

    const sub = () => {
    store.counter--
  }

  const getPrizeHandler = () => {
    alert('Your Prize is ' + store.getPrize);
  }



</script>