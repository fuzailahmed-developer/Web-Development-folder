import React, { useEffect, useState } from 'react'
import ChildA from '../components/ChildA'
import { userContext } from '../utils/Data'


const Home = () => {


  const apiUrl = 'https://dummyjson.com/users'
  const [userData,setUserData] = useState([])


  const apiCalling = async () =>  {
    try {
      
      const res = await fetch(apiUrl)
      const data = await res.json()
      data && setUserData(data.users)

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    apiCalling()
  },[])


  return (
    <div>
      <h1>I Am Parent Component</h1>
      <userContext.Provider value={userData}>
        <ChildA />
      </userContext.Provider>
    </div>
  )
}

export default Home