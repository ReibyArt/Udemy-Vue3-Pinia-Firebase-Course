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
  const userName = data.inputName;
  // Add name in [] names
  data.names.push(userName);
  // Clear the input
  data.inputName = '';
  console.log(data.names);
}


// Remove names from array
const removeName = (index) => {
  data.names.splice(index, 1);
}

    return {
      removeName,
      addNameToList,
      data
    }
  }
}).mount('#app');