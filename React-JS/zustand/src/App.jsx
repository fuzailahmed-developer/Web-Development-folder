import React from 'react'
import useMyStore from './store/store'

const App = () => {

  const count = useMyStore(state => state.count)
  const name = useMyStore(state => state.name)
  const increment = useMyStore(state => state.increment)
  const capitalize = useMyStore(state => state.capitalize)


  const handleClick = () => {
    increment()
  }

  const handleCapitalize = () => {
    capitalize()
  }

  return (
    <div>
      App
      <h1>count : {count}</h1>
      <button onClick={handleClick}>increment</button> <br /><br />
      <h1>{name}</h1>
      <button onClick={handleCapitalize}>Capitalize</button>
    </div>
  )
}

export default App