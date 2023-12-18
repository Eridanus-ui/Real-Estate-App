// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bmkestate-1c29a.firebaseapp.com",
  projectId: "bmkestate-1c29a",
  storageBucket: "bmkestate-1c29a.appspot.com",
  messagingSenderId: "901673089410",
  appId: "1:901673089410:web:49bf07d7d053378088f79b",
};

// Initialize and export Firebase
export const app = initializeApp(firebaseConfig);
