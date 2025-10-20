import React, { useEffect, useState } from 'react'
import LoadingAnimation from '../components/LoadingAnimation'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Api = () => {

    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const getUserData = async () => {

        setLoading(true)
        const res = await fetch('http://localhost:3000/users')
        const data = await res.json()
        if (data) {
            setLoading(false)
            setUserData(data)
        }
    }

    const styling = {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        listStyle: "none",
        border: "1px solid black",
        margin: 1,
        padding: "10px 20px",
        textAlign: "center"
    }

    const styleLi = {
        margin: 0
    }


    const apiUrl = 'http://localhost:3000/users'

    const deleteUser = async (id) => {
        const data = await axios.delete(apiUrl + "/" + id)
        getUserData()
    }


    const editUser = (id) => {
        navigate(apiUrl+"/"+id)
    }


    useEffect(() => {
        getUserData()
    }, [])


    return (
        <>

            {
                loading && <LoadingAnimation />
            }

            <div >
                {
                    userData.map((user, index) => (
                        <ul style={styling} key={user.id}>
                            <li style={styleLi}>{user.name}</li>
                            <li style={styleLi}>{user.email}</li>
                            <li style={styleLi}>{user.age}</li>
                            <li>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                                <button onClick={() => editUser(user.id)}>Edit</button>
                            </li>
                        </ul>
                    ))
                }
            </div>
        </>
    )
}

export default Api