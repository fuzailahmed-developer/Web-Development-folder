import React, { act, useReducer } from 'react'

const userInfo = {
  name: '',
  password: '',
  city: '',
  age: '',
  email: ''
}

const reducer = (data, action) => {
  return { ...data, [action.type]: action.val }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, userInfo)
  console.log(state)

  return (
    <>
      <h1>Use Reducer</h1>
      <div>
        <input type="text" placeholder='Enter Name' onChange={(e) => dispatch({ val: e.target.value, type: "name" })} /><br /><br />
        <input type="text" placeholder='Enter password' onChange={(e) => dispatch({ val: e.target.value, type: "password" })} /><br /><br />
        <input type="text" placeholder='Enter city' onChange={(e) => dispatch({ val: e.target.value, type: "city" })} /><br /><br />
        <input type="text" placeholder='Enter age' onChange={(e) => dispatch({ val: e.target.value, type: "age" })} /><br /><br />
        <input type="text" placeholder='Enter email' onChange={(e) => dispatch({ val: e.target.value, type: "email" })} /><br /><br />
      </div>
      <h1>Name : {state.name}</h1>
      <h1>password : {state.password}</h1>
      <h1>city : {state.city}</h1>
      <h1>age : {state.age}</h1>
      <h1>email : {state.email}</h1>
    </>
  )
}

export default App