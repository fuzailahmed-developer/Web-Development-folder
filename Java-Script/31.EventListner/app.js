let arr = ["Ali","Ahmed","Imran","Umer","Raza","Fuzail"]
let clickExample = document.querySelector(".content-box")
let geth1 = document.querySelector(".content-box span")
let count = 0;
clickExample.addEventListener("click",() => {
    if (count < arr.length -1) {
        geth1.innerHTML = `Name: ${arr[count]}`
    count++
    } else {
        count = 0
    }
})

let getContainer2 = document.querySelector(".container-2 .content-box")
let getSpan = document.querySelector(".heart-div span")
getContainer2.addEventListener("dblclick",(e) => {
    getSpan.style.opacity = 1;
    setTimeout(() => {
        getSpan.style.opacity = 0;
    },1000)
})

let card = document.querySelector(".card")
let count1 = 1
card.addEventListener("click",() => {
    let createCard = document.createElement("div")
    createCard.classList.add("card")
    createCard.innerText =  count1 
    let container3 = document.querySelector(".container-3")
    container3.append(createCard)  
    count1++
})