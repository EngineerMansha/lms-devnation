


import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCCGnqEujZ8-84GBb1GCb4729QFQk--iY4",
  authDomain: "react-auth-d2d58.firebaseapp.com",
  projectId: "react-auth-d2d58",
  storageBucket: "react-auth-d2d58.appspot.com",
  messagingSenderId: "515521779950",
  appId: "1:515521779950:web:119e8f83b42e9927bb3bff"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };