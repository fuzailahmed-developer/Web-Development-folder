// 🔁 Loops and Break
// Task 1:
// Print numbers from 1 to 50, but stop the loop if the number is divisible by 13.
// for(var i = 1; i <= 50; i++){
//     if (i % 13 == 0) {
//         break;
//     }
//     console.log(i); 
    
// }

//? 📐 Multiplication Table
// Task 2:
// Ask the user for a number and print its table in reverse (e.g., from 10 to 1).

// var tableNumber = +prompt('Enter Table Number');
// for(var i = 10; i > 0 ; i--){
//     console.log(tableNumber + " x " + i + " = " + i * tableNumber);
// }

//? 🧮 Sum of All Numbers
// var sum = 0;
// for(var i = 1; i <= 100; i++){
//     sum = sum + i;    
// }
// console.log(sum);

// 🧊 Even Numbers Skipper
// Task 7:
// Print all odd numbers from 1 to 30 using a loop and continue.

// for(var i = 0; i <= 30; i++){
//     if (i % 2 !== 0) {
//         console.log("number is Odd",i);
//     }
// }
// 🌟 Multiples Finder
// Task 8:
// Print all numbers from 1 to 100 that are divisible by both 3 and 5.
for(var i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
    }
    
}