import { doc, getDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { database } from '../../../firebase/config'

const UserScreen = () => {

  const { id } = useParams()
  const [err, setErr] = useState(null)
  const [loading, setLoading] = useState(false)
  const [updating, setUpdating] = useState(false)

  const [inputs, setInputs] = useState({
    fullName: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs({
      ...inputs, [name]: value
    })
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    const fullName = inputs.fullName.trim()
    const email = inputs.email.trim()
    const password = inputs.password.trim()

    if (!fullName || !email || !password) {
      console.log('All Fields Are Required.')
      return;
    }

    const userDocRef = doc(database, 'User', id)

    setUpdating(true)

    try {
      await updateDoc(userDocRef, {
        fullName,
        email,
        password
      })
      console.log('Update Successfully')
    }
    catch (error) {
      console.log("Err:", err)
    }
    finally {
      setUpdating(false)
    }
  }

  const fetchUser = async () => {
    const docRef = doc(database, 'User', id)
    setLoading(true)
    try {
      const docSnap = await getDoc(docRef)
      if (!docSnap.exists()) {
        setErr('No Such User!')
      }
      else {
        const data = docSnap.data()
        setInputs({
          fullName: data.fullName,
          email: data.email,
          password: data.password,
        })
      }
    }
    catch (error) {
      console.log("Err:", error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [id])

  if (loading) return <p>Loading...</p>

  if (err) return <p>{err}</p>

  return (
    <div>
      <h1>UserScreen</h1>

      <form onSubmit={handleUpdate}>

        <label htmlFor="fullName">
          Full Name:
          <input
            type="text"
            placeholder='Enter Full Name'
            autoComplete='off'
            name='fullName'
            value={inputs.fullName}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />

        <label htmlFor="email">
          Email:
          <input
            type="text"
            placeholder='Enter Email'
            autoComplete='off'
            name='email'
            value={inputs.email}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />

        <label htmlFor="password">
          Password:
          <input
            type="text"
            autoComplete='off'
            placeholder='Enter Password'
            name='password'
            value={inputs.password}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />

        <button disabled={updating || loading}>
          {
            updating ? 'updating...' : 'Update'
          }
        </button>

      </form>

      <br /><br />

      <button>
        <Link to={'/users'}>
          Back
        </Link>
      </button>

    </div>
  )
}

export default UserScreen