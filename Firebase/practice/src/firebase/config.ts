import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7griQ41waWL593v3Q-kTvn_jTKp08608",
  authDomain: "practice-c6cf8.firebaseapp.com",
  projectId: "practice-c6cf8",
  storageBucket: "practice-c6cf8.firebasestorage.app",
  messagingSenderId: "812481706084",
  appId: "1:812481706084:web:732c77491483259090c771",
  measurementId: "G-T2EZ61BCYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app

// Initialize Database
export const database = getFirestore(app)