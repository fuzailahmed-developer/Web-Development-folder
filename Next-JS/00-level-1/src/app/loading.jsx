import React from 'react'
import Heading from './heading/Heading'
import loadingImg from "../../public/gear-spinner.svg"
const loading = () => {
    return (
        <img src="/gear-spinner.svg" alt="" width={'100px'} height={'100px'} className='absolute left-1/2 top-1/2 -translate-1/2'/>
    )
}

export default loading