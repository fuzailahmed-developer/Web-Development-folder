import Student from "./student";

function App() {

  const students = [
    {
      id: 1,
      name: "Ali",
      subjects: ["Math", "English", "Science"]
    },
    {
      id: 2,
      name: "Sara",
      subjects: ["History", "Urdu", "Computer"]
    },
    {
      id: 3,
      name: "Ahmed",
      subjects: ["Biology", "Chemistry", "Physics"]
    }
  ];


  return (
    <div>
      <h1>Nested looping</h1>
      {
        students.map((student) => (
            <Student student={student} key={student.id}/>
        ))
      }
    </div>
  )

}
export default App