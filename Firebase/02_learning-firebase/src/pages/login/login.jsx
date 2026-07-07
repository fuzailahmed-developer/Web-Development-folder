import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase/firebase.config'

const LoginScreen = () => {

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs({
      ...inputs, [name]: value
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {

      const email = inputs.email.trim()
      const password = inputs.password.trim()

      if (!email || !password) {
        console.log("Email and Password is Required.")
        return;
      }

      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
      console.log("Login User:", userCredentials)
    } catch (error) {
      console.log(error.message || 'Something went wrong')
    }
  }

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id='email'
          placeholder="Enter Email"
          value={inputs.email}
          autoComplete='off'
          onChange={handleChange}
        />
        <br /><br />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          id='password'
          placeholder="Enter Password"
          value={inputs.password}
          autoComplete='off'
          onChange={handleChange}
        />

        <br />
        <br />

        <button>
          Submit
        </button>

      </form>

    </div>
  )
}

export default LoginScreen