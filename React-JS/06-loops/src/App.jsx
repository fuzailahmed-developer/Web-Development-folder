
// noted :
// key error q ata ha : jab bi hum react ma map ka use kr ka loop chalate ha tu isa uniquely identify krna perta ha 

// or hum direct reusable component banakr isa rerender kr sakte ha 



import { useState } from "react";
import Card from "../reusecomponet/card";
import Clock from "../reusecomponet/clocktask";

function App() {
  // task - 1
  const fruits = ["apple", "banana", "mango"];
  // task - 2 - 3
  const people = [
    { id: 1, name: "Ali", age: 22, email: "ali@gmail.com" },
    { id: 2, name: "Sara", age: 25, email: "sara@gmail.com" },
    { id: 3, name: "Usman", age: 28, email: "usman@gmail.com" },
  ];

  let [bgColor, setBgColor] = useState("red")

  return (
    <div>
      <h1>TASK 1</h1>
      <ul>
        {fruits.map((fruit, index) => (<li key={index}>{fruit}</li>))}
      </ul>
      <hr />
      <h1>TASK 2</h1>
      {people.map((person) => (<p key={person.id}>{person.name} - {person.age}</p>))}
      <hr />
      <h1>TASK 3</h1>
      {people.map((person) => (
        <Card userData={person} key={person.id} />
      ))}
      <hr />
      <h2>TASK 4</h2>


      <select onChange={(e) => {
        setBgColor(e.target.value)
      }}>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
      </select>

      <Clock mBgColor={bgColor} />

    </div>
  )
}
export default App