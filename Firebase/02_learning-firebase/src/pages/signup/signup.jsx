import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db } from '../../firebase/firebase.config'
import { doc, setDoc } from 'firebase/firestore'

const SignupScreen = () => {

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs({
      ...inputs, [name]: value
    })
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    try {

      const email = inputs.email.trim()
      const password = inputs.password.trim()
      const firstName = inputs.firstName.trim()
      const lastName = inputs.lastName.trim()

      if (!email || !password || !firstName || !lastName) {
        console.log("All Fields Are Required.")
        return;
      }

      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)

      const user = userCredentials.user

      await setDoc(doc(db, 'users', user.uid), {
        firstName,
        lastName,
        createdAt: new Date().toISOString()
      })
    }
    catch (error) {
      console.log(error.message || 'Something went wrong')
    }
  }

  return (
    <div>
      <h1>Signup Page</h1>

      <form onSubmit={handleSignup}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          id='firstName'
          placeholder="Enter First Name"
          value={inputs.firstName}
          autoComplete='off'
          onChange={handleChange}
        />
        <br /><br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          id='lastName'
          placeholder="Enter Last Name"
          value={inputs.lastName}
          autoComplete='off'
          onChange={handleChange}
        />
        <br /><br />
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

export default SignupScreen