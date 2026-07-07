import { get, onValue, ref, remove, update } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { realTimeDB } from '../../firebase/firebase.config'
import { useNavigate } from 'react-router'

const UsersScreen = () => {

  const navigate = useNavigate()
  const [users, setUsers] = useState([])

  const getAllUsers = async () => {
    const usersRef = ref(realTimeDB, 'users')
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val()
      const userArray = Object.entries(data).map(([id, value]) => ({
        id,
        ...value
      }))
      setUsers(userArray)
    })
  };

  const handleUpdateUser = async (id) => {
    const userRef = ref(realTimeDB, 'users/' + id)
    try {
      await update(userRef, {
        password: 'hello'
      })
      console.log('updated successfully.')
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteUser = async (id) => {
    const userRef = ref(realTimeDB, 'users/' + id)
    try {
      await remove(userRef)
      console.log('deleted successfully.')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div>
      <h1>Users Screen</h1>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {
          users.map((user) =>
            <div key={user.id}>
              <li>
                {user.email}
                <ul>
                  <li>
                    {user.password}
                  </li>
                </ul>
              </li>
              <li style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                <button onClick={() => handleUpdateUser(user.id)}>Update</button>
                <button onClick={() => navigate(`/users/${user.id}`)}>Details</button>
              </li>
            </div>
          )
        }
      </ul>
    </div>
  )
}

export default UsersScreen