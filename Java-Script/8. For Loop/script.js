//! for loop 
//? prnit number 1 to 10 
// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }
//? sum number 1 to 10
// var sum = 0;
// for(var i = 0; i <= 10; i++){
//   sum = sum + i;
// }
// console.log(sum);

//! for loop with array 
// var games = ['cricket' , 'hockey' , 'football' , 'baseball'];

// for(var i = 0; i < games.length; i++){

//   console.log(games[i]);
  
// }

//! for loop with array and print name in DOM Screen
// let muslimNames = [
//   "Aisha",
//   "Fatima",
//   "Khadija",
//   "Hassan",
//   "Hussain",
//   "Omar",
//   "Ali",
//   "Zainab",
//   "Abdullah",
//   "Maryam"
// ];
// for(var i = 0; i < muslimNames.length; i++){
//   console.log(muslimNames[i]);
//   document.write("<h1> " + muslimNames[i] + "</h1>")
// }

//! increase with 5 for loop
// for(var i = 5; i <= 200; i = i + 5){
//   console.log(i);
// }
//! minus array
// for (var i = 10; i > 0; i--){
//   console.log(i);
// }
//! targeted point
// for(var i = 0; i <= 15; i++){
//   console.log(i);
//   if (i === 9) {
//     break;
//   }
// }

//! print table 5
// for(var i = 1; i <= 10; i++){
//   console.log('5 x ' + i + ' = ' + i * 5);
// }

//! print table with user input
// var tableNumber = +prompt('Enter Table Number');
// var tableCount = +prompt('Enter Table Count');

// for(var i = 1; i <= tableCount; i++){
//   console.log(tableNumber + ' x  ' + i + ' = ' + i * tableNumber);
// }

//! Boolean and break 
// var targetedNum = 10;
// var flag = false;
// for(var i = 1; i <= 20; i++){
//   if (i === targetedNum) {
//     flag = false;
//     break;
//   }
// }
// if (flag) {
//   console.log("Num is Found!");
// } else {
//   console.log("Not Found");
// }

//! nested loop 
// for(var i = 1; i <= 10; i++){
//   console.log("i",i);
//   for(var j = 1; j <= 5; j++){
//     console.log("j",j);
//   }
// }

//! Nested for loop 
// for(var i = 1; i <= 10; i++){
//   console.log("i",i);
//   for(var j = 1; j <= 3; j++){
//     console.log("j",j);

//     for(var k = 1; k <= 3; k++){
//     console.log("k",k);
//   }
//   }
// }
//! print in reverse order array  
// let muslimNames = [
//   "Ali Ahmed",
//   "Fatima",
//   "Khadija",
//   "Hassan",
//   "Hussain",
//   "Omar",
//   "Ali",
//   "Zainab",
//   "Abdullah",
//   "Maryam"
// ];
// for(var i = muslimNames.length - 1; i >= 0; i--)
// {
//   console.log(muslimNames[i],i);
  
// }