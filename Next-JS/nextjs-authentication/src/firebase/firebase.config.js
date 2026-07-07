import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1UnixMm7fWSrnpXK9MXnvXD7Bo27rE-4",
  authDomain: "nextj-authentication.firebaseapp.com",
  projectId: "nextj-authentication",
  storageBucket: "nextj-authentication.firebasestorage.app",
  messagingSenderId: "400892212884",
  appId: "1:400892212884:web:72f64da8546c966bf42681",
  measurementId: "G-9SNZPVKEX4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {
  app,
  auth,
  db
}