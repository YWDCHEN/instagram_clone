import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { initializeApp } from "firebase/compat/app";

const config = {
  apiKey: "AIzaSyCEC9Gzi0h5W3qPqBgpRI8GQmGCIliziBo",
  authDomain: "instagram-5de1a.firebaseapp.com",
  projectId: "instagram-5de1a",
  storageBucket: "instagram-5de1a.appspot.com",
  messagingSenderId: "1019816964209",
  appId: "1:1019816964209:web:20c1422801b6b697f36bd0",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
