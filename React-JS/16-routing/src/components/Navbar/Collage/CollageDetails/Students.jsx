import React from 'react'

const Students = () => {

    const students = [
        "Ayaan Malik",
        "Sara Ahmed",
        "Rohan Iqbal",
        "Mehak Khan",
        "Farhan Ali",
        "Hira Fatima",
        "Danish Sheikh",
        "Areeba Noor",
        "Usman Raza",
        "Zainab Tariq"
    ];


    return (
        <div>
            <h1 className='text-2xl font-bold'>Students Name:</h1>
            <ul>
                {
                    students.map((name,index) => (
                        <li key={index}>{name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Students