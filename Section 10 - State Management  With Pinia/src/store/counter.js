import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 1,
    car: {
        brand: 'Renault',
        color: 'Yeelow',
        year: 2011
    }
  })
})


// () => ({}) - return object 