// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKW-ycKHZ0vun2BZSJaCGxB4cl1jXq3gI",
  authDomain: "netflixgpt-f02d4.firebaseapp.com",
  projectId: "netflixgpt-f02d4",
  storageBucket: "netflixgpt-f02d4.appspot.com",
  messagingSenderId: "14940596547",
  appId: "1:14940596547:web:d5d33c57727d18402a27f6",
  measurementId: "G-YPEDS67SRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();