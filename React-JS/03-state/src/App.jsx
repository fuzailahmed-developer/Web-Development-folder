
/*
Noted!

1. react js UI per value tabhi update kra ga jab is ka component rerender huga
    ! Is liya hum State ka use krta ha variable ki bajaha
    ! ager ap ku value change krni ha tu state ka use kro
    ! ager nahi krni tu variable ka use kro

*/




import { useState } from "react";
import Toggle from "./hideshow";
import MultiCondition,{MyCondition} from "./multicondition";
function App(){
  
  let [count,setCount] = useState(0)

  function increment(){
      if (count >= 0 && count < 10) {
        setCount(count + 1)
      } else setCount(0)
      
  }
  function decrement(){
      if (count > 0) {
          setCount(count - 1)
      } else setCount(10)
  }


  return (
    <>

    <h1>Count : {count}</h1>
    <button onClick={increment}>Increment</button> <br /> <br />
    <button onClick={decrement}>Decrement</button>
    <hr />
    <Toggle/>
    <hr />
    <MultiCondition/>
    <hr />
    <MyCondition/>
    </>
  )


}

export default App