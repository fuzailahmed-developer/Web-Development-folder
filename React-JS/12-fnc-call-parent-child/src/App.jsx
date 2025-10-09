// noted 
// some time needs call parent function with child
// forwardRef ager component ka reference kisi or component ma ha tu hum forwardRef useKrta ha

import React from 'react'
import Child from './components/Child'
import Ref from './components/Ref'

const App = () => {

  const alertFnc = (name) => {
    alert("My name is " + name)
  } 

  return (
    <div>
      <Child fnc={alertFnc}/>
      <Ref />
    </div>
  )
}

export default App