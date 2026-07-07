import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3Yx1pWjGtnquohAsoWIvKhzjbYrJub2o",
  authDomain: "first-project-76ed7.firebaseapp.com",
  databaseURL: "https://first-project-76ed7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "first-project-76ed7",
  storageBucket: "first-project-76ed7.firebasestorage.app",
  messagingSenderId: "128957248096",
  appId: "1:128957248096:web:c97af6bafbeb3ac7ed0905",
  measurementId: "G-QPV4WTSBQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app

export const auth = getAuth(app)

export const realTimeDB = getDatabase(app)
export const db = getFirestore(app)