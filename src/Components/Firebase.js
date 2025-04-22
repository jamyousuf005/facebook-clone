// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration

import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDp-nuW2hFLBndE6dulObfKiW_dY757NzI",
  authDomain: "login-auth-65858.firebaseapp.com",
  projectId: "login-auth-65858",
  storageBucket: "login-auth-65858.firebasestorage.app",
  messagingSenderId: "785481593211",
  appId: "1:785481593211:web:e42d1934a5d9486bdb0dde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db= getFirestore(app)
export default app