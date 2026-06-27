import { addDoc, collection, getDoc, getDocs, query, serverTimestamp, where } from 'firebase/firestore'
import React, { useState } from 'react'
import { Link } from 'react-router'
import { database } from '../firebase/config'

const HomeScreen = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        email: '',
        password: ''
    })

    const [submitting, setSubmitting] = useState(false)
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs({
            ...inputs, [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const fullName = inputs.fullName.trim()
        const email = inputs.email.trim()
        const password = inputs.password.trim()

        if (!fullName || !email || !password) {
            console.log('All Fields Are Required.')
            return;
        }

        setSubmitting(true)

        const collectionUser = collection(database, 'User');

        try {
            await addDoc(collectionUser, {
                fullName,
                email,
                password,
                createdAt: serverTimestamp()
            })
            console.log('Added Successfully...!')
        }

        catch (error) {
            console.log('Err:', error)
        }

        finally {
            setSubmitting(false)
        }

    }

    const handleSearch = async () => {

        if (!search) return;

        const collectionUser = collection(database, 'User')
        const q = query(collectionUser, where('email', '==', search))
        const querySnapshot = await getDocs(q)

        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        })
    }

    return (
        <div>

            <h1>Learning Firebase</h1>

            <form onSubmit={handleSubmit}>

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

                <button disabled={submitting}>
                    {
                        submitting ? 'Submitting...' : 'Submit'
                    }
                </button>

            </form>

            <br />
            <br />

            <button>
                <Link to={'/users'}>
                    Users
                </Link>
            </button>

            <br />
            <br />


            <label htmlFor="email">
                Email:
                <input
                    type="text"
                    placeholder='Enter Email'
                    autoComplete='off'
                    name='email'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </label>

            <button onClick={handleSearch}>
                Search
            </button>



        </div>
    )
}

export default HomeScreen