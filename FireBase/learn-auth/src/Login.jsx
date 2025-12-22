import React, { useState } from 'react'
import styles from './form.module.css'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from './utils/firebase'

const Login = () => {

    const [UserInfo, setUserInfo] = useState({
        // name: "",
        email: "",
        password: ""
    })

    function handleInputs(value, name) {
        setUserInfo({ ...UserInfo, [name]: value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        // const name = UserInfo.name.trim().toLowerCase()
        const email = UserInfo.email.trim().toLowerCase()
        const password = UserInfo.password.trim().toLowerCase()

        if (!email || !password) {
            alert('Please Fill All Inputs Fields...!')
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            console.log((userCredential).user)
        } catch (error) {
            alert(error.message)
        }

    }



    return (
        <div className={styles.container}>
            <form className={styles.formStyle} onSubmit={handleSubmit}>
                <h1>Login</h1>
                {/* <input value={UserInfo.name} type="text" name='name' placeholder='Enter Name' className={styles.input} autoComplete='off' onChange={(e) => handleInputs(e.target.value, e.target.name)} /> */}
                <input value={UserInfo.email} type="email" name='email' placeholder='Enter Email' className={styles.input} autoComplete='off' onChange={(e) => handleInputs(e.target.value, e.target.name)} />
                <input value={UserInfo.password} type="text" name='password' placeholder='Enter Password' className={styles.input} autoComplete='off' onChange={(e) => handleInputs(e.target.value, e.target.name)} />
                <button className={styles.btn}>Submit</button>
            </form>
        </div>
    )
}

export default Login