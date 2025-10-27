import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'

const Searching = () => {

  const [userData, setUserData] = useState([])
  const [input, setInput] = useState('')
  const [count, setCount] = useState(0)

  // api calling

  const apiUrl = 'https://jsonplaceholder.typicode.com/users'
  const apiCalling = async () => {
    const { data } = await axios.get(apiUrl)
    data && setUserData(data)
  }

  // searching functionality

  const filtered = useMemo(() => {
    return userData.filter(user => {
      console.log(user.name.toLowerCase())
      return user.name.toLowerCase().includes(input.toLowerCase())
    })
  }, [input,userData])




  useEffect(() => {
    apiCalling()
  }, [])

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input} /> <br />
      <ul>
        {
          filtered.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
      <br />
      <hr />
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default Searching
