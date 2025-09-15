import { useEffect, useState } from "react"
import Child from "./child"

function App (){

  // mount phase - run only one time

  useEffect(() => {
    console.log("Mount Phase Run!")
  },[])

  // update phase - run only when update state or props

  const [count,setCount] = useState(0)

  //? example in Child component file 

  // unMounting phase - run when your  component hide 

  const [display,setDisplay] = useState(true)

  return (
    <div>
      <h1>UseEffect Hook React JS!</h1>
      {display ? <Child count={count}/> : null}
      <button onClick={() => setCount(count + 1)}>count</button>
      <button onClick={() => setDisplay(!display)}>toggle</button>
    </div>
  )
}

export default  App