// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWfG2leI3vKm5fLxrDXc9n6_nZj3FrlrY",
  authDomain: "vueauthcourse-64905.firebaseapp.com",
  projectId: "vueauthcourse-64905",
  storageBucket: "vueauthcourse-64905.firebasestorage.app",
  messagingSenderId: "870355860913",
  appId: "1:870355860913:web:7998f0df9b81b9d90b1190"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// DB //
const DB = getFirestore();

export { DB }