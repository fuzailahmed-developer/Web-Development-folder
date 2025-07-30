//! part - 1

// var liEl = document.getElementsByClassName("liEl");
// console.log(liEl[0].style.color = "red" );

// for (var i = 0; i < liEl.length; i++)  {
//     console.log(liEl[i]);
//     liEl[i].style.color = "red"
// }

//! part - 2 

let muslimNames = [
  "Ahmed",
  "Fatima",
  "Zaid",
  "Ayesha",
  "Usman",
  "Khadija",
  "Bilal",
  "Maryam",
  "Hamza",
  "Sumayya"
];

var accessID = document.getElementById("ul");

for (var i = 0; i < muslimNames.length; i++){
  accessID.innerText = document.write(`<li> ${muslimNames[i]}</li>`);
  
}
