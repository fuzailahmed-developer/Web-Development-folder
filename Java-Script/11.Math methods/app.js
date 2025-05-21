//? pi value builtIn 
var piVal = Math.PI;
console.log(piVal.toFixed(3));

//? round if decimal value is greater or equal 5 is increase by 6
// var num = Math.round(prompt("Enter Number"));
// console.log(num);

// console.log(Math.round(5.5)); // 6 
// console.log(Math.round(5.4)); // 5
// console.log(Math.round(5.6)); // 6 
// console.log(Math.round(5.1)); // 5 

//? square root 
console.log(Math.sqrt(81));
console.log(Math.sqrt(6));

//? negative value to positive value convert
console.log(Math.abs(5));
console.log(Math.abs(-96));
console.log(Math.abs(-6));
console.log(Math.abs(6));

//? math ceil
console.log(Math.ceil(1.0012));

//? give random number 0 to 1;
console.log(Math.random());

//? remove decimal value floor
console.log(Math.floor(1.1));
console.log(Math.floor(10.3));

//? math.min for smallest number
console.log(Math.min(88,0,9,3,9,10,-1));

//? math.max for largest number
console.log(Math.max(88,0,9,3,9,100,-1));

//? dice

//* method 1
var newDice = Math.floor(Math.random() * 6) + 1;
console.log(newDice);
//* recommended Method 
var dice = Math.ceil(Math.random() * 6);
console.log(dice);


//? OTP Generator

var otpGenerator = Math.floor(Math.random() * 9000) + 1000;
console.log(otpGenerator);
// 1. not give 1
// 2. kaha chalana ha 9000
// 2. 1000 + max 9999

//? Dice task

// var firstDice = Math.ceil(Math.random() * 12);
// var secondDice = Math.ceil(Math.random() * 12);
// var total = firstDice + secondDice;
// document.write(total)
