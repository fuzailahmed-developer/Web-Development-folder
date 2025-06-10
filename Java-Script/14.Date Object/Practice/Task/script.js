//! 1 find the Day Which Day You Are Born
var dob = new Date("16 May 2008");
console.log(dob);

//! 2 print day Name
var dayNum = new Date().getDay();
var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var result = dayNames[dayNum];
console.log(result);

//! 3 Print Month
var month = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
console.log(month[new Date().getMonth()]);

//! 4 how old are you
var dobYear = Number(prompt("Enter Your Date Of Birth Year"));
var currYear = new Date().getFullYear();
var result1 = currYear - dobYear
console.log(result1);

//! 5 How many days are you born
var bod = new Date("06 May 2008").getTime();
var currentYear = new Date().getTime();
var calculate = currentYear - bod;
var result2 = calculate / (1000 * 60 * 60 * 24);
console.log(Math.floor(result2));

//? Noted
//*  1970 to 2008 millisecond
//*  1970 to 2025 millisecond
//* 2025 - 2008 - 17 Years


//! 6 How many days and hours left in Party
var partyDate = new Date("20 June 2025 10:00:00");
var curr = new Date();

var partyDateMs = partyDate.getTime();
var curr1 = curr.getTime();

var calculate1 = partyDate - curr1;
var result3 = calculate1 / (1000 * 60 * 60 );
console.log(Math.floor(result3));
 