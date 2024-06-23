
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebase = {
  apiKey: "AIzaSyA5wUpxhmd8Gx6y_CDOLkJfDzaAGNORi5c",
  authDomain: "relu-fa2e9.firebaseapp.com",
  projectId: "relu-fa2e9",
  storageBucket: "relu-fa2e9.appspot.com",
  messagingSenderId: "589823732290",
  appId: "1:589823732290:web:1403365eda9b36617e1bdb"
};

// Initialize Firebase
const app = initializeApp(firebase);
export const auth = getAuth(app);
