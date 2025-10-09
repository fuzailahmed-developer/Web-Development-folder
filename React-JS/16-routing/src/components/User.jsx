import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { data, useNavigate } from 'react-router'

const User = () => {

    const [userData, setUserData] = useState([])
    const navigate = useNavigate()
    const apiUrl = "https://jsonplaceholder.typicode.com/users"
    const apiCalling = async () => {
        const data = await axios.get(apiUrl)
        data && setUserData(data.data)
    }


    const handleUser = (userDetails) => {
        navigate(`/user/${userDetails.id}`)
    }


    useEffect(() => {
        apiCalling()
    }, [])

    return (
        <div>

            <ul className='p-10 m-20 border border-orange-200 rounded-lg'>
                {
                    userData.map((user) => (
                        <li key={user.id} className='mt-1 mr-1 mb-1'>
                            {user.name} {" "}
                            <button className='border py-1 px-3 rounded-md'
                            onClick={() => handleUser(user)}>
                            user Details</button>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default User