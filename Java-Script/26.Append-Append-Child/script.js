let accessContainer = document.querySelector(".container"); 
let h1Access = document.querySelector("h1")
let card = document.querySelector(".card");

// accessContainer.appendChild(h1Access.cloneNode(true))


for(var i = 2; i <= 100; i++){
    const newCard = card.cloneNode();
    newCard.innerText = i;
    accessContainer.appendChild(newCard)
}



let Ul = document.querySelector("#ul");
let p = document.createElement("p")
p.innerHTML = "Lorem ipsum 3"

Ul.append(p,"hello")
console.log(Ul);