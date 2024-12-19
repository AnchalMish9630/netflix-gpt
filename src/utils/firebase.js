// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp1GVtLVcjLLDVpBSpS4xbw6XZZ97QaNs",
  authDomain: "netflixgpt-e953c.firebaseapp.com",
  projectId: "netflixgpt-e953c",
  storageBucket: "netflixgpt-e953c.firebasestorage.app",
  messagingSenderId: "449659268477",
  appId: "1:449659268477:web:62a71235bdd0b24b11f014",
  measurementId: "G-9G2E2VNTBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);