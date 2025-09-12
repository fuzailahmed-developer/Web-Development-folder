function Student ({name}){
    
    return(
        <div>
            <h1>Our Students</h1>
            {name && <h1>StudentName : {name}</h1>}
        </div>
    )
}
export default Student