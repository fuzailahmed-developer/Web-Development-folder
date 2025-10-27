import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {

    const [Counter,setCounter] = useState(0)

  return (
    <div style={{border : "1px solid gray", margin : "30px", padding : "30px", borderRadius : "10px"}}>
        <h2 style={{backgroundColor : "blue",color : "white",padding : "10px 20px",borderRadius : "10px"}}>Parent</h2>
        <h2>Counter : {Counter}</h2>
        <button onClick={() => setCounter(Counter + 1)}>Increment</button>
        <Child name={Counter > 1  ? "Fuzail" : null}/>
    </div>
  )
}

export default Parent