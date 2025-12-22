
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDeKpFVj_3lWkvMHL-scYlPZO27qkf4yBc",
  authDomain: "todo-app-21b89.firebaseapp.com",
  projectId: "todo-app-21b89",
  storageBucket: "todo-app-21b89.firebasestorage.app",
  messagingSenderId: "104060898902",
  appId: "1:104060898902:web:5aadc6a94b9b8ea5feb5f7",
  measurementId: "G-W1VB9E2SHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// database
export const db = getFirestore(app)

// Auth
export const Auth = getAuth(app)

export default app