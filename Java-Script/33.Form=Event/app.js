
//? input is real time count 

let getInput = document.querySelector("input")
let getP = document.querySelector("p")
let getH1 = document.querySelector("h1")

// getInput.addEventListener("input",(e) => {
//     getP.innerHTML = e.target.value
//     getH1.innerHTML = "Length : " + e.target.value.length
// })

//? jab ap type kr ka input ka bahir click kro ga tu text print kra ga

// getInput.addEventListener("change" , (e) => {
//     getP.innerHTML = e.target.value
// })

//? focus when click input

getInput.addEventListener("focus",(e) => {
    document.body.style.backgroundColor = "blue"
})

//? blur 

getInput.addEventListener("blur",(e) => {
    document.body.style.backgroundColor = "unset"
})


//? Submit event 

// noted : get form event to input value with input name attribute
// noted : stop reload e.preventDefault() 

let form = document.querySelector("#myForm")
form.addEventListener("submit",(e) => {
    console.log(e.target.username.value);
    e.preventDefault()
})
