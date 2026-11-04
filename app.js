import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGnPbi021u03IFa7lUK5F5LiUZd_AxdcQ",
  authDomain: "jurassic-unix.firebaseapp.com",
  projectId: "jurassic-unix",
  storageBucket: "jurassic-unix.firebasestorage.app",
  messagingSenderId: "864029641950",
  appId: "1:864029641950:web:6ee51b97d2113c37ab864f",
};

// The app is initialized once when the Jurassic interface loads. Additional
// Firebase services can be imported here as the project starts using them.
export const firebaseApp = initializeApp(firebaseConfig);

import "./script.js";
