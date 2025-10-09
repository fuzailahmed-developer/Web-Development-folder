import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {
    const navigate = useNavigate()
    const [count, setCount] = useState(3)
    let intervalId;
    useEffect(() => {
        intervalId = setInterval(() => {
            setCount((prev) => prev - 1)
        }, 1000);
        return () => {
            console.log("unmount");
            clearInterval(intervalId)
        }
    }, [])

    useEffect(() => {
        if (count == 0) navigate("/")
    }, [count])

    return (
        <div className='h-screen flex justify-center items-center'>
            <h1 className='text-3xl font-bold'>
                 404 Page Not Found — Redirecting in {count}...
            </h1>
        </div>
    )
}

export default NotFound