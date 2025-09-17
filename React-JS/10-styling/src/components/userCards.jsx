


function UserCard({userData,user}) {

    return (
        
        <div style={userData.cardStyling}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" width={"100%"} />
            <div style={userData.cardContentStyling}>
                <h4>Name : {user.name}</h4>
                <p>Role  : {user.role}</p>
            </div>
        </div>
    )

}
export default UserCard