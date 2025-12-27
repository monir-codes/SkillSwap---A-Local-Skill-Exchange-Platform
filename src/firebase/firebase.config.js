// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6MRgJ6rGWMmevS3OHIDXAeB-42wa1cUE",
  authDomain: "skillswap-project-c69f4.firebaseapp.com",
  projectId: "skillswap-project-c69f4",
  storageBucket: "skillswap-project-c69f4.firebasestorage.app",
  messagingSenderId: "208602788856",
  appId: "1:208602788856:web:0584b140de3915d32edc0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);