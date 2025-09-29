import React, { useRef, useState } from 'react'
import UnControlled from './components/uncontrolled'

const App = () => {

  const inputRef = useRef(null)
  const [display,setDisplay] = useState(true)
  const handleInput = () => {
    inputRef.current.focus()
    inputRef.current.style.color = "white"
    inputRef.current.style.backgroundColor = "black"
    inputRef.current.value = ""
  }

  const handleToggle = () => {
    if (inputRef.current.style.display != "none") {
      inputRef.current.style.display = "none"
    } else inputRef.current.style.display = "inline"
  }

  return (
    <div>
      <h1>useRef Hook</h1>
      {display && <input type="text" placeholder='Enter Your Name'  ref={inputRef}/>}<br /><br />
      <button onClick={handleInput}>Click</button>
      <button onClick={handleToggle}>Toggle</button>
      <button onClick={() => setDisplay(!display)}>New Toggle</button>
      <hr />
      <UnControlled />
    </div>
  )
}

export default App