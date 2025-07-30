let getEmail = document.getElementById("email");
let getPassword = document.getElementById("password");
let err = document.getElementById("err");
let obj = {
    email: "abc@gmail.com",
    password: "hello#world"
}

// function submitData() {

//     if (getEmail.value != obj.email) {
//         err.innerHTML = "Email Required"
//     }

//     else if (getPassword.value != obj.password) {
//         err.innerHTML = "Password Required"
//     }

//     else{
//         err.innerHTML = "Data Submit Successfully"
//     }
// }

//! advance Error Handling

function submitData() {
    try {
        if (obj.email != getEmail.value) {
            throw "Email Required"
        }

        else if (obj.password != getPassword.value) {
            throw "Password Required"
        }
        else {
            throw "Data Submit Successfully"
        }
    } catch (error) {
        console.log("Error : " + error);
        err.innerHTML = error
    }

}



function checkAge(age) {
    try {
        if (isNaN(age)) {
            throw "The age is not a number."
        }
        else if (age <= 0) {
            throw "The age is not a number."
        }
        else if (age < 18) {
            throw "You must be at least 18."
        }
        else {
            return "Access granted!"
        }

    } catch (error) {
        return "Error : " + error
    }

}

function handleEqu() {

    let userAge = document.getElementById("userAge").value
    let result = checkAge(Number(userAge));
    document.querySelector(".output").innerHTML = result

}