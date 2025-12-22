var userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var userPassword = document.getElementById("password");
var getInfo = function () {
    if (!userName || !userEmail || !userPassword) {
        console.error("Missing input elements in DOM");
        return;
    }
    var name = userName.value;
    var email = userEmail.value;
    var password = userPassword.value;
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
};
