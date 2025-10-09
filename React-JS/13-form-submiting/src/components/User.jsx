import React, { useState } from 'react'

const User = () => {
    const [input,getInputVal] = useState("")
    const [userList,setUserList] = useState([])
    const [totalUser,setTotalUser] = useState(0)
    const [uniqueUser,setUniqueUser] = useState(0)

function handleUser() {
    setUserList([...userList,input])
    setTotalUser(userList.length + 1)
    setUniqueUser([...userList].includes(input) ? uniqueUser : uniqueUser + 1)
    getInputVal("")
}
  return (
    <div>
        <h1>Total User : {totalUser}</h1>
        <h1>Last User : {userList && userList.at(-1)}</h1>
        <h1>Total Unique User : {uniqueUser}</h1>
        <input type="text" onChange={(e) => getInputVal(e.target.value)} value={input}/>
        <button onClick={handleUser}>Add User</button>
        {
            userList.map((name,index) => (
                <h3 key={index}>{name}</h3>
            ))
        }
    </div>
  )
}

export default User