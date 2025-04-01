const { createApp, reactive, computed} = Vue;


const DEFAULT_STATE = {
  state: true,
  input: '',
  names: [],
  error: '',
  showError: false,
  result: ''
}


createApp({
  setup(){

const data = reactive(DEFAULT_STATE);

// Methods //
const addNameToList = () => {

}
    return {
      data,
      addNameToList
    }
  }
}).mount('#app');