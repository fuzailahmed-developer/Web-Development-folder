function Subjects({studentsSub}){
console.log(studentsSub)
    return (
        <div>
            {studentsSub.length > 0 ? studentsSub.map((sub) => (
                <p><b>Subject</b> : {sub}</p>
            )) : null}
        </div>
    )
}

export default Subjects