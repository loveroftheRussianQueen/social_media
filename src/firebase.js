// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEJ04NRdMXkPnLh9rBUDotx7nNQXmcgJU",
  authDomain: "social-6f9b3.firebaseapp.com",
  projectId: "social-6f9b3",
  storageBucket: "social-6f9b3.appspot.com",
  messagingSenderId: "808887835594",
  appId: "1:808887835594:web:c66d8d105a4734655b4d33",
  measurementId: "G-JYYJJDESGG"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export default db;

export { auth, provider, storage, db};