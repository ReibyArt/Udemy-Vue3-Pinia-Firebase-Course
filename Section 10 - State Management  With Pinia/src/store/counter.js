import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 10,
    attemts: 0,
    prizes: [
        'Car',
        'Game',
        'Coffee',
        'Guitar',
        'Nothing! You Loose! :*('
    ],
    car: {
        brand: 'Renault',
        color: 'Yeelow',
        year: 2011
    }
  }),
  // Gettets => Computed Properties in Vue
  getters: {
    getCount(state) {
        return state.counter;
    },

    getPrize(state) {
        let prize = '';
        state.attemts++;
        console.log(this.getAttampts);
        for(let step = 0; step < state.counter; step++) {
            prize = state.prizes[Math.floor(Math.random() * state.prizes.length)]
        }
        return prize
    },

    getAttampts(state) {
        return state.attemts;
    }
  } 
})


// () => ({}) - return object 