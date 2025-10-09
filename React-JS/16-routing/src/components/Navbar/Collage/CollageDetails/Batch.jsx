import React from 'react'

const Batch = () => {

    const batches = [
        "Batch 2020",
        "Batch 2021",
        "Batch 2022",
        "Batch 2023",
        "Batch 2024",
        "Batch 2025",
        "Batch 2026",
        "Batch 2027",
        "Batch 2028",
        "Batch 2029"
    ];


    return (
        <div>
            <h1 className='text-2xl font-bold'>Batch Name:</h1>
            <ul>
                {
                    batches.map((name,index) => (
                        <li key={index}>{name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Batch