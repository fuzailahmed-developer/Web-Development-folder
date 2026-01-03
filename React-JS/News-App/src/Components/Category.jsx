import React from 'react'
import { useMyContext } from '../context/MyContext'

const Category = () => {

    const { setCategory } = useMyContext()
    const Categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Technology']

    return (
        <div className='py-10 flex justify-center gap-x-10 gap-y-5 flex-wrap'>
            {Categories.map(item => (
                <button
                    key={item}
                    className="btn btn-primary"
                    onClick={() => setCategory(item.toLowerCase())}
                >
                    {item}
                </button>
            ))}

        </div>
    )
}

export default Category

