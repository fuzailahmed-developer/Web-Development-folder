let getForm = document.querySelector("form")
getForm.addEventListener("submit",(e) => {
    e.preventDefault()
    if (e.target.uname.value != "" && e.target.upassword.value != "") {
        console.log("Login Successful! Welcome, " + e.target.uname.value);
        // console.log("UserName: " + e.target.uname.value);
        getForm.reset()
    } else {
        alert("Please fill all fields")
    }

})