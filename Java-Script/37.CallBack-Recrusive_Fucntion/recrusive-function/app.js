// function checkInput (){
//     let userInput = prompt("Enter Your Name");
//     if (userInput.trim().length > 1 != "") console.log(userInput);
//     else checkInput()
// }
// checkInput()


function num(n) {
    if (n >= 1) {
        console.log(n);
        num(n - 1)
    }
    else console.log("Program End!");
}
num(5)


let userInput = document.querySelector("input");
userInput.addEventListener("click",(e) => {
        userInput.style.backgroundColor = "red"
},{once : true})