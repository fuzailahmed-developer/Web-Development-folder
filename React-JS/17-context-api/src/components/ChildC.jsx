import React, { useContext } from 'react'
import { userContext } from '../pages/Home/Home'

const ChildC = () => {

    const userName = useContext(userContext)

    return (
        <>
            <h1 style={{ backgroundColor: "yellow", padding: 20 }}>Child C</h1>
            <h1 style={{textAlign : "center", marginInline : "20px", padding : "10px", borderRadius : "10px",backgroundColor : "blue",color : "white"}}>User Name is : {userName}</h1>
        </>
    )
}

export default ChildC