//? print number 1 to 10
for(var i = 1; i <= 10; i++){
    console.log(i);
}
//? sum of 1 to 10
var sum = 0;
for(var i = 1; i <= 10; i++){
    sum = sum + i;
    console.log(sum);
}
//? for loop with array
var personName = ["Ahmed","Raza","Zohib","Amir","Babar","Imad","Usman"];
for(var i = 0; i < personName.length; i++){
    console.log(personName[i],i);
}
//? print on dom screen 
// const muslimBoysNames = [
//   "Ahmed",
//   "Omar",
//   "Yusuf",
//   "Ali",
//   "Hassan",
//   "Bilal",
//   "Zayd",
//   "Ibrahim",
//   "Tariq",
//   "Salman"
// ];

// for(var i = 1; i < muslimBoysNames.length; i++){
//     document.write("<h1>" + muslimBoysNames[i] + "</h1>")
// }

//? start with 10 and increase with 10 
for(var i = 10; i <= 200; i = i + 10){
    console.log(i);
}
//? minus number
for(var i = 10; i > 0 ; i--){
    console.log(i);
}
//? targated point 
var flag = false;
for(var i = 1; i < 20; i++){
    if (i == 10) {
        flag = true;
        break;
    }
}
if (flag) {
    console.log("Match");
} else{
    console.log("Not Match");
}
//? print table 5 
for(var i = 1; i <= 10; i++){
    console.log(`5 x ${i} = ${i * 5}`);
    
}
//? print table with userInput 
// var tableNumber = +prompt("Enter Table Number");
// var tableCount = +prompt("Enter Table Count");
// for(var i = 1; i <= tableCount; i++){
//     console.log(`${tableNumber} x ${i} = ${i * tableNumber}`);
// }

//? break and flag
var targetedNum = 22;
var flag = false;
for(var i = 1; i <= 30; i++){
    if (i == targetedNum) {
        flag = true;
        break;
    }
}
if (flag) {
    console.log("Found");
} else{
    console.log("Not Found");
}
// ternary operator 
// flag ? console.log("Found") : console.log("Not Found");
 
// var snacks = ["chips", "biscuits", 'paties', 'drink', 'lays'];
// var userInput = prompt('Kia chahie ?');
// var itemFoundFlag = false;
// for(var i = 0; i < snacks.length; i++){
//     if (snacks[i] == userInput) {
//         itemFoundFlag = true;
//         break;
//     }
// }
// itemFoundFlag ? console.log("Your item is " + userInput) : console.log("not Match item");

//? print stars 
// var stars = "*****";
// for(var i = 0; i < 5 ; i++){
//     document.write("<h1>" + stars + "</h1>");
//     stars = stars.slice(0, stars.length -1);
// }

var stars = "*";
for(var i = 5; i > 0 ; i--){
    document.write("<h1>" + stars + "</h1>");
    stars = stars + '*'
}