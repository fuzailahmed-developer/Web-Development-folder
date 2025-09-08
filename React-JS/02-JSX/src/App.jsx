
/* noted 

1. function kab call krna ya or kab nahi krna 
  * ager tumha direct data render krna ha jesa hi page load hu tu tum direct function call kr sakte hu or argument bi pass kr sakte hu!

  * lakin ager tumha function kisi event per call krna ha jesa onclick per tu tumha function call nahi krna ha ager tumha function ma argument pass krna ha tu isa aik internalize function ke ander apna function call krna ha 
  Example!
  <button onClick={() => sum(10,20)}>Click</button>
  
*/


import { useState } from "react"
import Learning from "./functions"

function App(){

  let obj = {
    name : "",
    age : 19,
    city : "karachi"
  }

  function sum(a,b,opt){
    if (opt == "+") {
      return a + b
    } else a - b
  }


  return (
<div>
      
    <h1>{sum(32,54,"+")}</h1>

    <h2>{obj.name?obj.name:"fuzail"}</h2>
    <Learning/>
</div>

  )
}

export default App