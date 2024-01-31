// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog02.firebaseapp.com",
  projectId: "mern-blog02",
  storageBucket: "mern-blog02.appspot.com",
  messagingSenderId: "1061426549361",
  appId: "1:1061426549361:web:6f0d07604c48f3e5be41d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);