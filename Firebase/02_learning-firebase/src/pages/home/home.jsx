import { push, ref, set } from 'firebase/database'
import React, { useContext, useState } from 'react'
import { realTimeDB } from '../../firebase/firebase.config'
import CreateAuthContext from '../../context/auth/auth.context'

const HomeScreen = () => {


  const { user, loading } = useContext(CreateAuthContext)
  

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs({ ...inputs, [name]: value })
  }

  const handleAddUser = async (e) => {
    e.preventDefault();

    const email = inputs.email.trim();
    const password = inputs.password.trim();

    if (!email || !password) {
      console.log("All fields are required.");
      return;
    }

    try {
      const usersRef = ref(realTimeDB, "users");
      const newUserRef = push(usersRef);

      await set(newUserRef, {
        email,
        password,
        createdAt: Date.now(), // timestamp
      });

      setInputs({
        email: "",
        password: ""
      })

      console.log("User created successfully.");
    } catch (error) {
      console.error(error);
      console.log("Something went wrong.");
    }
  };

  if (loading) {
    return <p>Loading...</p>
  }

  console.log(user)

  return (
    <div>

      <h1>Firebase Real Time Database</h1>

      <form onSubmit={handleAddUser}>
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

export default HomeScreen