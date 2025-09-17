import Subjects from "./studentsubject"

function Student({student}){
console.log(student)

return(
    <div style={
        {
            backgroundColor : "#ccc",
            borderRadius : "8px",
            borderBottom : "3px solid black",
            padding : "5px 20px",
            marginBottom : "10px"
        }
    }>
        <h3>Name : {student.name}</h3>
        <Subjects studentsSub={student.subjects}/>
    </div>
)

}
export default Student