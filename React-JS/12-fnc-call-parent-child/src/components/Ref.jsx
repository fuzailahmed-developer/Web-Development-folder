import React, { useEffect, useRef } from 'react'
import ForwardRef from './ForwardRef';

const Ref = () => {
    const inputRef = useRef("")


    const getInput = () => {
        inputRef.current.value = 1000;
        inputRef.current.focus()
        inputRef.current.style.outline = "1px solid red"
    }

    return (
        <div>
            <h1></h1>
            <ForwardRef ref={inputRef}/>
            <button onClick={getInput}>Value</button>
        </div>
    )
}

export default Ref
