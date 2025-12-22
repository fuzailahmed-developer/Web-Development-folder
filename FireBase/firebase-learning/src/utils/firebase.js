import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAY52QyE90fDZUtjuG8s-If-BdGqM7Ulr4",
    authDomain: "learning-firebase-7bcda.firebaseapp.com",
    projectId: "learning-firebase-7bcda",
    storageBucket: "learning-firebase-7bcda.firebasestorage.app",
    messagingSenderId: "1043448985672",
    appId: "1:1043448985672:web:208fa8d20eb377f971807d",
    measurementId: "G-6JG6KVYRXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// database
export const db = getFirestore(app)
export const realTimeDB = getDatabase(app)
export default app