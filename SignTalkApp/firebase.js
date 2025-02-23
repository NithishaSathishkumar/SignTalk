// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7DRg_BlikPRsILAZzzc-s41X3CO9n0MM",
  authDomain: "signtalk-28788.firebaseapp.com",
  databaseURL: "https://signtalk-28788-default-rtdb.firebaseio.com",
  projectId: "signtalk-28788",
  storageBucket: "signtalk-28788.firebasestorage.app",
  messagingSenderId: "232857204074",
  appId: "1:232857204074:web:83c0e494e80f4017d76113"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
