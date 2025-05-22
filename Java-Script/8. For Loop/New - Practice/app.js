//* HINT : outer for row inner for column
//! sir practice 
// var flag = false;
// var targetedNum = 8;
// for(var i = 1; i <= 10; i++){
//     if (i == targetedNum) {
//         flag = true;
//         break;
//     } 
// }
// if (flag) {
//     console.log("Target Number Found");
// } else {
//     console.log("Target Number Not Found");
// }
//! My Practice 
// var latter = ["A","B","C","D","E","F","G","H","I"]
// var targetLetter = "C";
// var flag = false;
// for(var i = 0; i < latter.length; i++){
//     if (latter[i] == targetLetter) {
//         flag = true;
//         break;
//     }
//     console.log(latter[i]);
// }
// if (flag) {
//     console.log("C Found");
// } else {
//     console.log("C Not Found");
// }

//! Nested For loop
//? example - 1 
// let i;
// let j;
// for (i = 1; i <= 3; i++) {
// for (j = 10; j <= 15; j++) {
// document.write(`${j} `);
// }
// document.write("<br>");
// }

//? example - 2 
// for(var i = 1; i <= 4; i++){
//     for(var j = 1; j <= 3; j++){
//         document.write(`* `)
//     }
//     document.write("<br>")
// }

//? example - 3 
// for(var i = 1; i <= 4; i++){        //
//     for(var j = 1; j <= i; j++){    //
//         document.write("* ")        //
//     }                               //
//     document.write("<br> ")         //
// }                                   //

// //? example - 4
// for(var i = 1; i <= 4; i++){
//     for(var j = 1; j <= i; j++){
//         document.write(`${ i * j }`)
//     }
//     document.write("<br> ")
// }

//! task 
// 1 - task 
// for(var i = 1; i <= 4; i++){
//     for(var j = 1; j <= 6; j++){
//         document.write(`* `)
//     }
//     document.write("<br>")
// }

//? 2 - task 
// for(var i = 1; i <= 4; i++){
//     for(var j = 1; j <= i; j++){
//         document.write("* ")
//     }
//     document.write("<br>")
// }
//? 3 - task 
// for(var i = 1; i <= 5; i++){
//    for(var j = 1; j <= i; j++){
//     document.write(j)
    
//    }
//     document.write("<br>")
// }
//? nested i j k
// for(var i = 1; i <= 5; i++){
//     console.log("i",i);
//     for(var j = 1; j <= 4; j++){
//         console.log("j",j);
//         for(var k = 1; k <= 3; k++){
//             console.log("k",k);
            
//         }
//     }
// }

//? print reverse array 
// var arr = ["apple","mango","banana","orange"];
// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
    
// }
//? reverse 
// var arr = ["apple","mango","banana","orange"];
// for(var i = arr.length - 1; i >= 0; i--){
//     console.log(arr[i]);
    
// }
//! input and print  
const pakistaniSnacks = [
  "Samosa",
  "Pakora",
  "Chapli Kabab",
  "Gol Gappa",      
  "Dahi Bhalla",    
  "Aloo Tikki",
  "Chicken Rolls",
  "Bun Kabab",
  "Chaat Papri",
  "Jalebi"          
];
console.log(pakistaniSnacks.includes("Gol Gappa"));

// var flag = false;
// var findSnakes = prompt("Enter Snake Name");
// for(var i = 0; i < pakistaniSnacks.length; i++){
//     if (findSnakes == pakistaniSnacks[i]) {
//         flag = true;
//         break;
//     }
    
// }
// if (flag) {
//     console.log(`Your Snakes ${findSnakes} is available`);
// } else {
//     console.log("Snakes is Not Available");
// }

//? print star with string 
var stars = "*****"
for(var i = 0; i < 5; i++){
    document.write(`<h1>${stars}</h1>`)
    stars = stars.slice(0,-1);
}
// * * * * *
// * * * * 
// * * *  
// * *   
// *    
//? secound patteran 
// var stars = "*";
// for(var i = 0; i < 5; i++){
//      document.write(`<h1>${stars}</h1>`)
//      stars = stars + "*"   
// }
// * 
// * *
// * * * 
// * * * *
// * * * * *
// var str = "Pizza";
// console.log(str.slice(0,-1));
// console.log(str);
// console.log(str.slice(-1));
// console.log(str.slice(-1));


// for(var i = 0 ; i < 5; i++){
//     document.write("<h1>" + str + "</h1>")
//     str = str.slice(0,-1)
// }