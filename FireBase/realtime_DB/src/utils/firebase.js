
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY52QyE90fDZUtjuG8s-If-BdGqM7Ulr4",
  authDomain: "learning-firebase-7bcda.firebaseapp.com",
  databaseURL: "https://learning-firebase-7bcda-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "learning-firebase-7bcda",
  storageBucket: "learning-firebase-7bcda.firebasestorage.app",
  messagingSenderId: "1043448985672",
  appId: "1:1043448985672:web:208fa8d20eb377f971807d",
  measurementId: "G-6JG6KVYRXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)


export default app