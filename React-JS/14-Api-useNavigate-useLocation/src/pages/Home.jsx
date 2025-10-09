import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { data, useNavigate } from 'react-router'
import loader from "../assets/infinite-spinner.svg"
const Home = () => {

    const apiUrl = `https://jsonplaceholder.typicode.com/users`
    const [userData, setUserData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const apiCalling = async () => {
        try {
            setIsLoading(true)
            await new Promise((resolve) => setTimeout(resolve, 3000))
            const data = await axios.get(apiUrl)
            if (data) {
                setUserData(data.data)
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }


    function handleUser (id){
        navigate(`/user/${id}`)
    }


    useEffect(() => {
        apiCalling()
    }, [])

    return (
        <div>
            <ul>
                {
                    userData.map((user) => (
                        <li key={user.id}>
                            {user.name} {" "}
                            <button onClick={() => handleUser(user.id)}>View User</button>
                        </li>
                    ))
                }
            </ul>
            <div>
                {isLoading && <img src={loader} alt="" width={"200px"} />}
            </div>
        </div>
    )
}

export default Home