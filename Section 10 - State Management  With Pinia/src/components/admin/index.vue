<template>
    <div class="row">
      <h1>Admin</h1>
      <hr />
      <div class="col-sm-5 mb-3">
        <p>
          <strong> Change count: {{ count }} </strong>
        </p>
  
        <!-- <div>
          <label class="form-label">By how much</label>
          <input type="number" class="form-control" v-model="data.amount" />
        </div> -->
        <br />
  
        <button type="button" class="btn btn-primary me-3"
        @click="add">+</button>
        <button type="button" class="btn btn-outline-secondary"
        @click="sub">-</button>
      </div>
      <hr />
      <div>
        <p> {{  store.car.brand }}</p>
        <p> {{  store.car.color }}</p>
        <p> {{  store.car.year }}</p>

        <button
        type="button" 
        class="btn btn-outline-secondary"
        @click="patchState">
        Patch Global State From Pinia
        </button>
      </div>
    </div>
  </template>
  
<script setup>
  import { computed } from 'vue';
  import { useCounterStore } from '@/store/counter'

  const store = useCounterStore();

  // Computed Properties
  const count = computed(() => store.counter);

  // Mutations
  const add = () => {
    store.counter++
  }

    const sub = () => {
    store.counter--
  }

  // Mutations multiply
  const patchState = () => {
    store.$patch({
      counter: 100,
        car: { 
          brand: 'Ford',
          color: 'Ranger',
          year: 1969
        }
    })
  }
</script>