import React, { useContext } from 'react'
import { userContext } from '../utils/Data'


const ChildC = () => {

    const users = useContext(userContext)
    return (
        <>
            <h1>I Am Child Component C</h1>
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>{user.firstName}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default ChildC