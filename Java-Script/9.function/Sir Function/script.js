//! first 
// function helloUser () {
//     console.log("Hello User");
// }
// helloUser();
// helloUser();
// helloUser();

//! second
// function message(userName) {
//     console.log("Hello " + userName + " Welcome to Our Website" );
// }
// message("Fuzail");
// message("Ammar");

//! third
// function sum (num1,num2) {
//     console.log(num1 + num2);
// }
// sum(5,20);


//! forth
// function greetUser (userName) {
//     console.log("Hi",userName);
// }
// function findFriend (friendsName) {
//     if (friendsName == "muhammad" || friendsName == "Omer") {
//         greetUser(friendsName)
//     } else {
//         console.log("User Not Found");
//     }
// }
// var user = prompt("Enter Your Friend Name");
// findFriend(user);

//! five

// function userMessage (userRoleMessage) {
//     console.log("Hello User Welcome to " + userRoleMessage + " Panel");
// }
// function userRole (CheckUserRole) {
//     if (CheckUserRole == "admin" || CheckUserRole == "user" || CheckUserRole == "guest") {
//         userMessage(CheckUserRole)
//     } else {
//         console.log("User Not Found!");
//     }
// }
// var userPrompt = prompt("Enter User Name");
// userRole(userPrompt);

//! six

function introductionMe (name = "Fuzail", profession = "Web-developer" , age) {
    console.log("Hi,");
    console.log("I am " + name );
    console.log("I am a " + profession );
    console.log("I am " + age + " years old." );
}
var Name = prompt("Enter Your Name")
var profession = prompt("Enter Your Profession")
var age = prompt("Enter Your age")

introductionMe(Name,profession,age)
