let getContainerBox = document.querySelector(".container")
let getRed = document.querySelector(".red")
let getBlue = document.querySelector(".blue")
let getGreen = document.querySelector(".green")

document.body.addEventListener("click",(e) => {
    console.log("Body Clicked");
})

getGreen.addEventListener("click",(e) => {
    console.log("Green Clicked");
    e.stopPropagation()
})