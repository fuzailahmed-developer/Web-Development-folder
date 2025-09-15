function Card ({userData = "transparent"}){
    return(
        <div>
            <ul style={
                {
                    border : "1px solid green",
                    width : "300px",
                    padding : "15px 10px",
                    listStyle : "none",
                    borderRadius : "8px",
                }
            }>
                <li>Name : {userData.name}</li>
                <li>Age : {userData.age}</li>
                <li>Email : {userData.email}</li>
            </ul>
        </div>
    )
}

export default Card