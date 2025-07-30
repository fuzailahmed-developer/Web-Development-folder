let getBox = document.querySelector(".box")
let container = document.querySelector(".container")
//! click jab click complete hu raha ha jab fire huraha ha 
// getBox.addEventListener("click",(e) => {
//     let createDiv = document.createElement("div")
//     createDiv.classList.add("box")
//     container.append(createDiv)
// })
//! dbl click
// getBox.addEventListener("dblclick",(e) => {
//     let createDiv = document.createElement("div")
//     createDiv.classList.add("box")
//     container.append(createDiv)
// })
//! mouse down instant print not wait for complete click
getBox.addEventListener("mousedown",(e) => {
    let createDiv = document.createElement("div")
    createDiv.classList.add("box")
    createDiv.style.backgroundColor = "green"
    container.append(createDiv)
})
//! mouse up instant print not wait for complete click
getBox.addEventListener("mouseup",(e) => {
    let createDiv = 
    // createDiv.classList.add("box")
    createDiv.style.backgroundColor = "blue"
    container.append(createDiv)
})