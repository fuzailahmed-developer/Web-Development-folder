let userInput = document.querySelector("#userInput");
let data = document.querySelector("p");

//! 1 . Input Event

// userInput.addEventListener("input",(e) => {
//     data.innerText = e.target.value
// })

//! 2 . change Event 

// userInput.addEventListener("change",(e) => {
//     data.innerText = e.target.value
// })

//! 3 . focus Event 

userInput.addEventListener("focus",() => {
    console.log("focus Event");
    
})

//! 4 . blur Event 

userInput.addEventListener("blur",() => {
    console.log("Blur Event");
    
})