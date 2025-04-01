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

 // Validate //
  const validate = (value) => {
    data.error = '';
    if(value === ''){
      data.error = 'Sorry! Your name is empty!'
      return false;
    }

    if(data.names.includes(value)){
      data.error = 'Sorry! Your names must be unique!'
      return false; 
    }
    return true;
  }

  // // // //
  if(validate(userName)) {
    data.names.push(userName);
    data.inputName = '';
    data.showError = false;
  }
  else {
    data.showError = true;
  }
}

// Remove names from array
const removeName = (index) => {
  data.names.splice(index, 1);
}

    return {
      data,
      removeName,
      addNameToList,
    }
  }
}).mount('#app');