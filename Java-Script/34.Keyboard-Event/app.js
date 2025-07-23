//! keyDown 
// let selectInput = document.getElementById("input1");
// selectInput.addEventListener("keydown",(e) => {
//     console.log(e.key);
// })

//! keyup 
let selectInput = document.getElementById("input1");
selectInput.addEventListener("keyup",(e) => {
    console.log(e.key);
})

//? task 

// selectInput.addEventListener("keydown",(e) => {
//     if (e.key != "Enter") {
//         console.log(`You pressed ${e.key}!`);
//     } else {
//         alert("You pressed Enter!")
//         console.log("You pressed Enter!");
        
//     }
// })

//! keypress not recommended

// noted : tab shift backspace and some more keys are not count

// let selectInput = document.getElementById("input1");
// selectInput.addEventListener("keypress",(e) => {
//     console.log(e.key);
// })