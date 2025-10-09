import React, { useState } from 'react'

const InputBox = ({setUser}) => {


  return (
    <div>
         <h1>Add User</h1> 
         <input type="text" onChange={(e) => setUser(e.target.value)}/> 
            
        <hr />
    </div>
  )
}

export default InputBox