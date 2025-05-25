//? new keyword expelane latter 
var currentDate = new Date();
console.log(currentDate);

//? get year in date 
var getFullYear = currentDate.getFullYear();
console.log(getFullYear);

//? get month start with 0 and end 11 
var getMonth = currentDate.getMonth() + 1;
console.log(getMonth);

//? get day value in number
var getDay = currentDate.getDay();
console.log(getDay);

//? get date 
var getDate = currentDate.getDate();
console.log(getDate);

//? get time 
var getTime = currentDate.getHours();
console.log(getTime);

//? get minutes
var getMinutes = currentDate.getMinutes();
console.log(getMinutes);

//? get months in string
var fullMonths = currentDate.toDateString();
console.log(fullMonths);

//? get time in string 
var fullTime = currentDate.toTimeString();
console.log(fullTime);

//? Important get time get milliseconds
var milliseconds = currentDate.getTime();
console.log(milliseconds);

//! Task 
// var userInput = prompt("Enter Your BarthDay Year");
// var storeResult =  new Date().getFullYear() - userInput;
// console.log(storeResult);

var findDateOrMonth = prompt("Check Month Or Date").toLowerCase();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();

if (findDateOrMonth == "month") {
    var month = new Date().toDateString();
    console.log(month);

}

else if (findDateOrMonth == "day") {
    var currentDay = days[today.getDay()]
    console.log(currentDay);
}
else {

}




