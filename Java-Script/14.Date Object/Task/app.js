//! 1
var currDate = new Date();
// console.log(currDate);
//! 2
var requiredDate = new Date("10 June 2025");
// console.log(tomorrow);
//! 3
var currDateInMS = currDate.getTime();
var reqDateInMS = requiredDate.getTime();
var calculate = reqDateInMS - currDateInMS;
var formula = calculate / (1000 * 60 * 60 * 24);
console.log(Math.ceil(formula));