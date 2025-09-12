function User ({name,email,age,country,userDetails,collageNames}){
    console.log(collageNames);
    return (
        <div>
            <h1>User Component</h1>
            <h2>UserName : {name}</h2>
            <h2>UserAge : {age}</h2>
            <h2>UserEmail : {email}</h2>
            <h2>UserCountry : {country}</h2>
            <hr />
            <h1>Student Data</h1>
            <h2>isAdult : {userDetails.isAdult}</h2>
            <h2>isDriver : {userDetails.isDriver}</h2>
            <h2>Religion : {userDetails.religion}</h2>
            <h2>isStudent : {userDetails.isStudent}</h2>
            <hr />
            <h1>Collages Names</h1>
            <h2>{collageNames.join(" , ")}</h2>
        </div>
    )


}

export default User