import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAUXB7SsYIiDek2hbknFBl6_hMkJml1cHE",
  authDomain: "gamesource-4da6d.firebaseapp.com",
  projectId: "gamesource-4da6d",
  storageBucket: "gamesource-4da6d.firebasestorage.app",
  messagingSenderId: "616002552108",
  appId: "1:616002552108:web:a2096a9e3bf2fe24462c89",
  measurementId: "G-6EM1QX79DP"
};


initializeApp(firebaseConfig);

const DB = getFirestore();
const AUTH = getAuth();

export { DB, AUTH };