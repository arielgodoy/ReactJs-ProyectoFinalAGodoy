// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDOHIgPDY2xOkkjTLGzdv49-u6GiRCHFP8",
  authDomain: "react-coderhouse-a21f2.firebaseapp.com",
  projectId: "react-coderhouse-a21f2",
  storageBucket: "react-coderhouse-a21f2.appspot.com",
  messagingSenderId: "1089341784908",
  appId: "1:1089341784908:web:65083f0c923f393283c5e9",
  measurementId: "G-0ZRE50CCK2"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//console.log(db);
export { db };
