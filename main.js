const {createApp, ref, reactive} = Vue;
createApp({
  setup() {
    const date = new Date().toLocaleString();
    const greeting = "Hello! Today is " + date;
    const isTrue = true;
    const arrayOfNames = ["Phasmophobia", "Gothic", "Witcher", "Sherlock Holmes"];
    const objectGames = {
      Gothic: 2001,
      Phasmophobia: 2020,
      Witcher: 2007, 
    };

    const messageFromArrayFunction = () => "Hello From Array Function!";

    function messageFromFunction() {
      return "Hello From Just Function!"
    }

    // Using Ref //
    let count = ref(0);
    function changeValue(){
      setTimeout(()=>{
        count.value = 32;
      }, 2000)
    };

    // Ref Object //
    let refObj = ref({
      objCar: "Mustang",
      objBike: "Yamaha",
      objHuman: "Driver"
    });

    // Reactive Obj //
    let reactObj = {
      objGame: "GTA 6",
      objYearOfGame: "2025"
    };

    // Changing Ref //
    function UpdateHuman(){
      setTimeout(()=>{
        refObj.value.objCar = "Chevrolet 1969";
        refObj.value.objBike = "Suzuki";
        refObj.value.objHuman = "ReibyArtGames"
      }, 3000)
    };

    // Changing Reactive //
    function ReactiveShow() {
      setTimeout(()=>{
        reactObj.objGame,
        reactObj.objYearOfGame = "2025 - 2026"
      }, 2000)
    };

    // Directive v-bind, v-if, v-for //

    let imageAvatar = ref({
      src: "./assets/images/avatarReiby.png",
      alt: "ImageReibyArtGames"
    });

    const linkToGoogle = "http://google.com";
    const linkToYouTube = "https://youtube.com/@ReibyArtGames";
    let textWelcome = "Welcome to my channel!";
    const myOwnHtml = "<strong> STRONG HTML </strong>"

    // V-IF and V-SHOW //

    let user = ref({
      nameOfUser: "Jack",
      ageOfUser: 18,
      allowedAgeUser: 18
    });

   function CheckOfUser()
    {
      return nameOfUser === "Jack" ? true : false;
    };

    // Looping V-FOR //

    const nameOfLoop = ref(["Reiby", "Aranel", "Riki"]);

    // Object in the loop //

    let objectsInLoop = {
      objectInTheLoopOne: "OneObj",
      objectInTheLoopTwo: "TwoObj",
      objectInTheLoopTree:"TreeObj",
    }

    // Array Objects in the Loop //

    const arrObjsLoop = ref([
      
        {arrObjlooping: "arrObjLoop_One", color: "red"},
        {arrObjlooping: "arrObjLoop_Two", color: "blue"},
        {arrObjlooping: "arrObjLoop_Tree", color: "green"},
       
  ]);

  // Re-render V-ONCE //
  
  const nameVOnce = ref("Artiom");

  function UpdateNameVOnce() {
    setTimeout(()=>{
      nameVOnce.value = "Reiby";
    }, 2000);
  }

  // Working with Events v-on:click and v-on:mousemove //

  const nameVOnClick = ref("Artiom");

  function UpdateNameVOnClick() {
    nameVOnClick.value = "Reiby By V-ON:CLICK!!!";
  }
  
 // Using v-on: mouseonmove //
  const coordinatesXY = ref({ 
    x: 0,
    y: 0,
  });

  function GetCoordinates(event) {
    coordinatesXY.value.x = event.clientX;
    coordinatesXY.value.y = event.clientY;
  }

  // Events and Arguments //

  const nameOfEventArgument = ref("Artiom Argument");
  
  function UpdateNameWithArg(newName, event) {
    console.log(event);
    nameOfEventArgument.value = newName;
  }

  function handleForm() {
    // event.preventDefault(); // Classic prevent behaivor!
    console.log("Form Submitted!");
  }

  // Forms and V-MODEL //

  const nameForm = ref({
    nameToForm: "",
    lastNameToForm: "",
    ageToForm: 33,
    checkBoxModel: false,
  });

  function HandleFormVModel(){
    console.log(nameForm.value);
  }

    

    // RETURN //
    return {
      greeting,
      isTrue,
      arrayOfNames,
      objectGames,
      messageFromArrayFunction,
      messageFromFunction,
      count,
      changeValue,
      refObj,
      UpdateHuman,
      reactObj,
      ReactiveShow,
      imageAvatar,
      linkToGoogle,
      linkToYouTube,
      textWelcome,
      myOwnHtml,
      user,
      CheckOfUser,
      nameOfLoop,
      objectsInLoop,
      arrObjsLoop,
      nameVOnce,
      UpdateNameVOnce,
      nameVOnClick,
      UpdateNameVOnClick,
      coordinatesXY,
      GetCoordinates,
      nameOfEventArgument,
      UpdateNameWithArg,
      handleForm,
      nameForm,
      HandleFormVModel
    }
  }
}).mount("#app"); 