import { defineStore } from 'pinia';
import axios from 'axios';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    posts: [],
    counter: 0,
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
  },

  // Actions are equivalent of methods in components (Mutations ????)
  actions: {

    // NOT ASYNC
    add() {
        this.counter++
    },

    sub() {
        this.counter--
    },
    // ASYNC
    async getPosts(limit) {
        try {
            // const response = await axios.get('https:/jsonplaceholder.typicode.com/posts')
            // Get limit posts
            const response = await axios.get(`https:/jsonplaceholder.typicode.com/posts?_limit=${limit}`)
            this.add();
            console.log(this.getCount)
            this.posts = response.data;
            console.log(this.posts);
        }
        catch(err) {
            console.log(err);
        }
    } 
  } 
})


// () => ({}) - return object 