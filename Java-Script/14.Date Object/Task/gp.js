//1
var dateMethod = new Date();
console.log(dateMethod);

//2 
var daysName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var days = new Date();
var getDay = days.getDay();
var currDay = daysName[getDay];
console.log(currDay);

//3 
var monthsName = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var getMonths = new Date();
var currMonths = getMonths.getMonth();
var month = monthsName[currMonths];
console.log(month);

//4 
var Hour = new Date();
var currHour = Hour.getHours();
if(currHour >= 0 && currHour < 12){
    console.log("AM Time Zone");
}
else if(currHour >= 12 && currHour <= 23){
    console.log("PM Time Zone");
}
else{
    console.log("Not Found");
}

//5 
// print millisecond 

var millisecond = new Date ();
var getTime = millisecond.getTime();
console.log(getTime);

//6
let date1 = new Date("2025-01-01");
let date2 = new Date("2025-06-01");
// Print which one is earlier

var getTimer1 = date1.getTime();
var getTimer2 = date2.getTime();
if (getTimer1 >= getTimer2) {
    console.log("getTimer1 " + getTimer1 + " Is earlier");
} else {
    console.log("getTimer2 " + getTimer2 + " Is earlier");
}