

// noted 
// 1.hum check box ki value ku array ma store kra kr add or remove kr sakte ha with state and change input event



import { useState } from "react"
import Controlled from "./controlled"
import CheckBox from "./checkbox"
import Radio from "./radio"
import Select from "./select"
function App(){
  const [inputVal,getInputVal] = useState()
  return (
    <>
      <input type="text" onChange={(e) => getInputVal(e.target.value)} value={inputVal}/>
      <h2>{inputVal}</h2>
      <button onClick={() => getInputVal("")}>Clear</button>
      <hr />
      <h1>Controlled Component in React JS!</h1>
      <Controlled/>
      <hr />
      <CheckBox />
      <hr />
      <Radio />
      <hr />
      <Select />
    </>
  )


}


export default App