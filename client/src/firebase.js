// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dreamestate-2097d.firebaseapp.com",
  projectId: "dreamestate-2097d",
  storageBucket: "dreamestate-2097d.appspot.com",
  messagingSenderId: "303293624841",
  appId: "1:303293624841:web:68ccbaea834049dae63ed8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);