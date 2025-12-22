import React, { useState } from 'react'
import { db } from './utils/firebase'
import { addDoc, collection } from 'firebase/firestore'

import styles from './form.module.css'
import { Link } from 'react-router-dom'

const Home = () => {

    const [UserInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: ""
    })

    function handleInputs(value, name) {
        setUserInfo({ ...UserInfo, [name]: value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const name = UserInfo.name.trim().toLowerCase()
        const email = UserInfo.email.trim().toLowerCase()
        const password = UserInfo.password.trim().toLowerCase()
        if (!email || !name || !password) {
            alert('Please Fill All Inputs Fields...!')
            return;
        }
        const collectionUsers = collection(db, "Users")

        try {
            await addDoc(collectionUsers, {
                name,
                email,
                password,
                createdAt: new Date()
            })
            setUserInfo({
                name: "",
                email: "",
                password: ""
            })
            alert("added Successfully...!")
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className={styles.container}>
            <button className={styles.btn2}>
                <Link to={'/read'}>List</Link>
            </button>
            <form className={styles.formStyle} onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <input value={UserInfo.name} type="text" name='name' placeholder='Enter Name' className={styles.input} autoComplete='off' onChange={(e) => handleInputs(e.target.value, e.target.name)} />
                <input value={UserInfo.email} type="email" name='email' placeholder='Enter Email' className={styles.input} autoComplete='off' onChange={(e) => handleInputs(e.target.value, e.target.name)} />
                <input value={UserInfo.password} type="text" name='password' placeholder='Enter Password' className={styles.input} autoComplete='off' onChange={(e) => handleInputs(e.target.value, e.target.name)} />
                <button className={styles.btn}>Submit</button>
            </form>
        </div>
    )
}

export default Home