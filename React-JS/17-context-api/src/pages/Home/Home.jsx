import React, { createContext, useState } from 'react'
import ChildA from '../../components/ChildA'

// step - 1  : create context
export const userContext = createContext()

const Home = () => {


    const studentNames = [
        "Ali",
        "Sara",
        "Ahmed",
        "Fatima",
        "Hassan",
        "Ayesha",
        "Bilal",
        "Zara",
        "Usman",
        "Maryam"
    ];


    const [count, setCount] = useState(0)
    function handleCount() {
        setCount(prev => (prev + 1) % studentNames.length)
    }
    return (
        <>
            <userContext.Provider value={studentNames[count]}>
                <ChildA />
            </userContext.Provider>

            <button onClick={handleCount}>Change</button>
        </>

    )
}

export default Home