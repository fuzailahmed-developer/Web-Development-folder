//! 1 print single and double quotes inside single and double quotes; 
let text1 = "Hello \"fuzail\" how are you";
let text2 = 'Hello \'fuzail\' how are you';
console.log(text1);
console.log(text2);
//! 2 line break
let text3 = "Hello World!\nJavaScript"
console.log(text3);

//! 3 search 
let message = "Stay focused, work hard, be kind, learn daily, trust the process, never give up, Success will follow soon.";
console.log(message.search(/success/i));

//! 4 match
let message1 = "Work hard, stay strong, Stay focused, work smart, be kind, be humble, stay positive, work hard, stay focused.";
// console.log(message1.match(/Work/gi)); match 
console.log(...message1.matchAll(/stay/gi)); // work with for loop 

//! 5 startWith // and you can give the position starting and ending
let message2 = "I Love Pakistan";
console.log(message2.startsWith("I"));

//! 6 startWith
let message3 = "I Love Pakistan";
console.log(message3.endsWith("Pakistan"));

//! 7 slice extract part
let message4 = "I Love Pakistan";
console.log(message4.slice("7"));

//! 8 replace and replace all
let message5 = "I Love You";
console.log(message5.replace("You","Fuzail"));

//! 9 extract character charAt
let message6 = "I Love You";
console.log(message6.charAt(7));

//! 10 character code characterCodeAt
let message7 = "I Love You";
console.log(message7.charCodeAt(7));

//! 11 accuses character last index 
let message8 = "I Love You";
console.log(message8.at(-1));

//! 12 upper and lower case
let message9 = "I Love You";
console.log(message9.toUpperCase());

//! 13 remove space start and end
let message10 = "   I love You    ";
console.log(message10.trim());

//! 14 reverse
let message11 = "I love You";
console.log(message11.split(" ").reverse().join(" "));