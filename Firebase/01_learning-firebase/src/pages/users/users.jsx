import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { database } from '../../firebase/config'

const UsersScreen = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleDelete = async (id) => {
    const docRef = doc(database, "User", id)
    try {
      await deleteDoc(docRef)
      console.log('Deleted Successfully')
      navigate(0)
    }
    catch (error) {
      console.log('Err:', error)
    }
  }

  const fetchUsers = async () => {
    const userCollection = collection(database, 'User')
    setLoading(true)
    try {
      const querySnapshot = await getDocs(userCollection)
      const data = querySnapshot.docs.map((doc) => (
        {
          id: doc.id,
          ...doc.data()
        }
      ))
      setUsers(data)
    }

    catch (error) {
      console.log('Err:', error)
    }

    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])


  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>All Users</h1>

      <button>
        <Link to={'/'}>
          Users
        </Link>
      </button>

      <ul>
        {
          users.length > 0 ?
            (
              users.map((user) =>
                <li key={user.id} style={{ marginBlock: 10 }}>
                  {user.fullName} -
                  <button onClick={() => navigate(`/users/${user.id}`)}>Update</button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </li>
              )
            ) :
            (
              <li>
                Users Not Available
              </li>
            )
        }
      </ul>

    </div>
  )
}

export default UsersScreen