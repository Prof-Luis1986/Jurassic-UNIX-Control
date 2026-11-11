import { initializeApp } from 'https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js';
import { getAnalytics, isSupported } from 'https://www.gstatic.com/firebasejs/13.2.0/firebase-analytics.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCBHk3_7q0a94yBun4ZbGJ_bcSryyhyjPU',
  authDomain: 'cesar-cifrado.firebaseapp.com',
  projectId: 'cesar-cifrado',
  storageBucket: 'cesar-cifrado.firebasestorage.app',
  messagingSenderId: '1071983841533',
  appId: '1:1071983841533:web:820692b1e64e845339ee94',
  measurementId: 'G-D01L11KRXQ'
};

const app = initializeApp(firebaseConfig);

// Analytics only runs in browsers where Firebase reports it is supported.
// This avoids console errors in privacy-restricted or unsupported contexts.
if (await isSupported()) {
  getAnalytics(app);
}
