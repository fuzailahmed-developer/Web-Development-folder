import React from 'react'

const Child = ({fnc}) => {
    
  return (
    <div>
        <button onClick={() => fnc("Ali")}>Alert</button>
    </div>
  )
}

export default Child