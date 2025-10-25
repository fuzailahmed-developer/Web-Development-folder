"use client"

import React, { useEffect, useState } from 'react'
import Heading from './heading/Heading'
import { useRouter } from "next/navigation";

const NotFound = () => {

    const [counter, setCounter] = useState(3)
    const router = useRouter()

    useEffect(() => {

        const intervalId = setInterval(() => {
            setCounter(prev => prev > 0 ? prev - 1 : 0)
        },1000)

        return () => clearInterval(intervalId)

    }, [])

    useEffect(() => {
        if (counter == 0) {
            router.push('/')
        }
    },[counter])


    return (
        <div>
            <Heading text={`Page Not Found ${counter} ...!`}/>
        </div>
    )
}

export default NotFound