//! Part - 1
//? in string 
var currDate = Date();
console.log(currDate);
console.log(typeof currDate); //string
//? convert in object for access
var currDate = new Date();
console.log(currDate);

//! extract part
//? get year
var year = new Date().getFullYear();
console.log(year);
//? get month
var month = new Date().getMonth();
console.log(month);
//? get day
var day = new Date().getDay();
console.log(day);
//? get hours
var hours = new Date().getHours();
console.log(hours);
//? get minutes
var minutes = new Date().getMinutes();
console.log(minutes);
//? get second
var second = new Date().getSeconds();
console.log(second);
//? millisecond
var millisecond = new Date().getMilliseconds();
console.log(millisecond);
//? get millisecond time 1970 - 1 january
var milli2 = new Date().getTime();
console.log(milli2);

//? get date in string
var getDate1 = new Date().toDateString();
var getDate2 = new Date().toLocaleDateString();
console.log(getDate1);
console.log(getDate2);

//? get time in string 
var getTime1 = new Date().toTimeString();
var getTime2 = new Date().toLocaleTimeString();
console.log(getTime1);
console.log(getTime2);
