import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBjqn1VYuJEkmUO7D_0CUMR0K5hWOogMoo",
    authDomain: "cart-8c369.firebaseapp.com",
    projectId: "cart-8c369",
    storageBucket: "cart-8c369.appspot.com",
    messagingSenderId: "221593119891",
    appId: "1:221593119891:web:199bcfa454e11c91fb7166"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore;