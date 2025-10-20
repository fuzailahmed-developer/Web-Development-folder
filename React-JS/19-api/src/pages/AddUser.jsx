import axios from 'axios'
import React, { useState } from 'react'

const AddUser = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")


    const createUser = async () => {
        const apiUrl = 'http://localhost:3000/users'
        try {
            const data = await axios.post(apiUrl,
                {
                    name,
                    age,
                    email
                }
            )
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <input type="text" placeholder='Enter Name' autoComplete='off' onChange={(e) => setName(e.target.value)} />
            <br /><br />
            <input type="text" placeholder='Enter Age' autoComplete='off' onChange={(e) => setAge(e.target.value)} />
            <br /><br />
            <input type="text" placeholder='Enter Email' autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
            <br /><br />
            <button onClick={createUser}>Add User</button>
        </>
    )
}

export default AddUser