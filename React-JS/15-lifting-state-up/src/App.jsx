

// "Lifting state up" React ka ek concept hai jiska matlab hai state ko child component se utha kar parent component me rakhna, taake woh state multiple child components ke sath share ho sake.

// ager obj ku update krna ha or display per show krna ha tu ap ku pehla obj ku aik state ma store krna ha per jab ap ku update krna hi zaroorat hu tu pehla key update kro per isa shallow ya deep copy kro or per state ma store kro

import React,{useState} from 'react'
import InputBox from './components/inputBox'
import Display from './components/Display'
import UpdateObj from './components/UpdateObj'
import UpdateArr from './components/UpdateArr'

const App = () => {

  const [user,setUser] = useState("")

  return (
    <div>
      <InputBox setUser={setUser}/>
      <Display user={user}/>
      <UpdateObj />
      <UpdateArr />
    </div>
  )
}

export default App