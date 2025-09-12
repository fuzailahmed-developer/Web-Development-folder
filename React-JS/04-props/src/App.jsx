
//! what is props ?
// jab humai aik component sa dusra component ma data transfer krna huta ha tu hum props use krta ha like parament
// ap default props use kr sakte hu 
// or ap props ka throw html parse kr sakte hu default children name huta ha or self closing nahi use krta
// or aik component ko multiple time use kr sakte ha
//  or click per bi props bej sakte ha with state



import User from "./user"
import Student from "./student";
import { useState } from "react";
import NewProps from "./advProps";
import HtmlInProps from "./html";

function App() {

  const country = "pakistan"

  let userObj = {
    isAdult: "true",
    isDriver: "false",
    religion: "Islam",
    isStudent: "true"
  }

  let colleges = ["Harvard University", "Stanford University", "MIT", "Oxford University", "Cambridge University"];
  let [studentName, setStudentName] = useState("")

  // default props 


  return (
    <div>
      <h1>Hello World</h1>
      <hr />
      {/* external component */}
      <User name={"Fuzail Ahmed"} age={"18"} email={"fuzail@gmail.com"} country={country} userDetails={userObj} collageNames={colleges} />
      <hr />
      <Student name={studentName} />
      <button onClick={() => {
        setStudentName("Ali Raza")
      }}>
        Add Student
      </button>
      <hr />
      <h1>Default Props</h1>
      <NewProps name="Umer"/>
      <NewProps/>
      <hr />
      <h1>Parse HTML Throw Props</h1>
      <HtmlInProps color="red"> 
        <h1>Hello Every One</h1>
        <h1>Welcome to react World!</h1>
      </HtmlInProps>
    </div>
  )


}

export default App