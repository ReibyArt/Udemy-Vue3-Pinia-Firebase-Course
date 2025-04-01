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


// Computed Properties //

const isReady = computed(()=>{
  return data.names.length > 1;
})

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


// Random name
const getRandomName = () => {
  return data.names[Math.floor(Math.random() * data.names.length)];
}

const generateResult = () => {
  let rand = getRandomName();

  if(data.result !== '') {
    while(rand === data.result){
      rand = getRandomName();
    }
  }
  data.result = rand;
}

const showResults = () => {
  generateResult();
    data.state = false;
}

// Reset DEFAULT_STATE 
const resetApp = ()=> {
  data.state = true;
  data.input = '';
  data.names = [];
  data.error = '';
  data.showError = false;
  data.result = '';
}

// Get New Name 

const getNewResult = () =>
{
  generateResult();
}

    return {
      data,
      removeName,
      addNameToList,
      isReady,
      showResults,
      resetApp,
      getNewResult
    }
  }
}).mount('#app');