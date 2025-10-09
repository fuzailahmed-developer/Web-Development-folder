import React from 'react'

const Department = () => {

    const departments = [
        "Computer Science",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Business Administration",
        "Information Technology",
        "Psychology",
        "Biotechnology",
        "English Literature",
        "Mass Communication"
    ];


    return (
        <div>
            <h1 className='text-2xl font-bold'>Department Names:</h1>
            <ul>
                {
                    departments.map((name,index) => (
                        <li key={index}>{name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Department