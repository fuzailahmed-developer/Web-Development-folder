/*
var liEl = document.getElementsByTagName("li");
// console.log(liEl[1]);

for(var i = 0; i < liEl.length; i++){
    // console.log(liEl[i]);
    liEl[i].style.color = "blue"
    liEl[i].style.fontSize = "20px"
    liEl[i].style.textTransform = "lowerCase"
}

var el = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1]
console.log(el);
*/

var anchorEl = document.getElementById("aEl")
//? 1. 
// var checkHref = anchorEl.hasAttribute("href");
// console.log(checkHref);

//? 2. 
// var getValue = anchorEl.getAttribute("href");
// console.log(getValue);

//? 3. 
var setAttribute = anchorEl.setAttribute("class","fuzail");

// * checking

console.log(anchorEl.attributes);

//? 4 

anchorEl.removeAttribute("target")
// * checking

// console.log(anchorEl.attributes);