import { get, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { realTimeDB } from '../../../firebase/firebase.config'

const UserScreen = () => {

  const { id } = useParams()
  const [loading, setLoading] = useState(false)

  const fetchUserById = async () => {
    if (!id) return;
    setLoading(true)
    try {
      const userRef = ref(realTimeDB, 'users/' + id)

      const snapshot = await get(userRef)

      if (snapshot.exists()) {
        console.log('Users:', snapshot.val())
        return snapshot.val()
      }

      else{
        console.log('User not found with this ID!')
        return null;
      }

    }
    catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUserById()
  },[])

  return (
    <div>UserScreen</div>
  )
}

export default UserScreen