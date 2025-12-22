import React from 'react'
import { auth } from './utils/firebase';
import { signOut } from 'firebase/auth';

const Home = () => {

  async function logout() {
    try {
      await signOut(auth);
      console.log("User logged out")
    } catch (error) {
      console.error("Error Logging Out:", error.message)
    }
  }

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <h1>Welcome Back!👋</h1>
    </div>
  )
}

export default Home