import React, { memo } from 'react'

const Child = ({name}) => {
    console.log("I am Child")
  return (
    <div>
        <h2 style={{backgroundColor : "blue",color : "white",padding : "10px 20px",borderRadius : "10px"}}>Child</h2>
        <h2>Name : {name}</h2>
    </div>
  )
}

export default memo(Child)