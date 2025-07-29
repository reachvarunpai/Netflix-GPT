// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDKW-ycKHZ0vun2BZSJaCGxB4cl1jXq3gI",
  authDomain: "netflixgpt-f02d4.firebaseapp.com",
  projectId: "netflixgpt-f02d4",
  storageBucket: "netflixgpt-f02d4.appspot.com",
  messagingSenderId: "14940596547",
  appId: "1:14940596547:web:d5d33c57727d18402a27f6",
  measurementId: "G-YPEDS67SRB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Fix: safely initialize analytics to prevent CORS error
isSupported()
  .then((supported) => {
    if (supported) {
      getAnalytics(app); // ✅ This will no longer throw CORS error
    }
  })
  .catch((err) => {
    console.warn("Analytics not supported or failed to load:", err);
  });

export { app, auth };
