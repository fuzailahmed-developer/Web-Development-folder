//! string to number 
var num = "5";
console.log(+num,typeof +num);
//! remove decimal string to number
var num1 = "7.5";
console.log(parseInt(num1));
console.log(typeof parseInt(num1));
//! not remove decimal string to number
var num2 = "9.9";
console.log(parseFloat(num2));
console.log(typeof parseFloat(num2));
//! string to number using number contractor
var num3 = "10.2";
console.log(Number(num3));
console.log(typeof Number(num3));

//? Number to String 
var num4 = 88.8;
console.log(num4 + "");
console.log(typeof (num4 + ""));

//? Number to String Using String Contractor
var num5 = 99.9;
console.log(String(num5));
console.log(typeof String(num5));


var city = "Islamabad";
city = city.replace("Islamabad","Lahore");
console.log(city);

var num9 = 35.36;
var result = String(num9).slice(0,2) + String(num9).slice(3,5)
console.log(result);

