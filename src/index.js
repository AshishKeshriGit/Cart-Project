import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import * as firebase from 'firebase';
// import 'firebase/firestore';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjqn1VYuJEkmUO7D_0CUMR0K5hWOogMoo",
  authDomain: "cart-8c369.firebaseapp.com",
  projectId: "cart-8c369",
  storageBucket: "cart-8c369.appspot.com",
  messagingSenderId: "221593119891",
  appId: "1:221593119891:web:199bcfa454e11c91fb7166"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

