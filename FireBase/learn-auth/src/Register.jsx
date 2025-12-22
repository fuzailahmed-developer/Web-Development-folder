import React, { useState } from 'react'
import styles from './form.module.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from './utils/firebase'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'


const Register = () => {

    const navigate = useNavigate()

    const [UserInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: ""
    })

    function handleInputs(value, name) {
        setUserInfo({ ...UserInfo, [name]: value })
    }

async function handleSubmit(e) {
    e.preventDefault();
    const name = UserInfo.name.trim().toLowerCase();
    const email = UserInfo.email.trim().toLowerCase();
    const password = UserInfo.password.trim().toLowerCase();

    if (!email || !name || !password) {
        alert('Please Fill All Input Fields!');
        return;
    }

    try {
        const userRegister = await createUserWithEmailAndPassword(auth, email, password);
        const user = userRegister.user;

        // 🔑 Important: Signup ke baad user ko logout karo
        await auth.signOut(); // ya signOut(auth)
        
        await setDoc(doc(db, "Clients", user.uid), { name, email });


        navigate('/login')

        alert("User Created Successfully. Please Login Now!");


    } catch (error) {
        alert(error.message);
    }
}


    return (
        <div className={styles.container}>
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

export default Register