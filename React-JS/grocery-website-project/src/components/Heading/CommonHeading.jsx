import React from 'react'

const CommonHeading = ({highlightedText,simpleText}) => {
    return (
        <div className='w-fit mx-auto flex flex-col items-end'>
            <h2 className='text-3xl sm:text-[40px] md:text-5xl font-bold'>
                <span className='text-orange-500'>{highlightedText} </span>
                {simpleText}</h2>
            <div className='bg-orange-500 h-1 w-[45%] mt-2.5 sm:mt-3 md:mt-4 rounded-xl'></div>
        </div>
    )
}

export default CommonHeading