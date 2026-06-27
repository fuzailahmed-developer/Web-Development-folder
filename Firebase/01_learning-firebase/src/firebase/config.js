import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyC3Yx1pWjGtnquohAsoWIvKhzjbYrJub2o",
    authDomain: "first-project-76ed7.firebaseapp.com",
    projectId: "first-project-76ed7",
    storageBucket: "first-project-76ed7.firebasestorage.app",
    messagingSenderId: "128957248096",
    appId: "1:128957248096:web:c97af6bafbeb3ac7ed0905",
    measurementId: "G-QPV4WTSBQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// Initialize Firestore Database
export const database = getFirestore(app)

// Initialize Realtime Database
export const realTimeDataBase = getDatabase(app)