//! Get Value in Date
var dateMethod = new Date();

//! 1.print full date using date method 
// var date = new Date();
// console.log(date);

//! 2. Get Year
var getYear = dateMethod.getFullYear();
console.log(getYear);

//! 3.Get Month start 0 to 11
var getMonth = dateMethod.getMonth() + 1;
console.log(getMonth);

//! 4.Get Day start
var getDay = dateMethod.getMonth() + 1;
console.log(getDay);

//! 5.Get Date
var getDate = dateMethod.getDate();
console.log(getDate);

//! 6.Get time 
var time = dateMethod.getHours();
console.log(time);

var time1 = dateMethod.getMinutes();
console.log(time1);

var time2 = dateMethod.getSeconds();
console.log(time2);

//! to date string and to time sting
var time3 = dateMethod.toDateString();
console.log(time3);

var time4 = dateMethod.toTimeString();
console.log(time4);

//! Get Time Millisecond 1970 to current 

//! Task Find Year
var time5 = dateMethod.getTime();
console.log(time5);

var userInput = +prompt("Enter Your Date Of Brith Year");
var currentYear = dateMethod.getFullYear(); 
var age;
console.log(currentYear - userInput);


//! Find Day
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var today = new Date();
var date = today.getDay();
var result = days[date];

console.log(result);

//! Find Month

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var today1 = new Date();
var currMonth = today1.getMonth();
var monthName = months[currMonth];

console.log(monthName);