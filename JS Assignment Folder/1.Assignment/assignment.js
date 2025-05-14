
document.write("<strong>Tip:</strong> Agar aap full source code dekhna chahtay hain to <kbd>Ctrl + U</kbd> press karein ya right-click karke 'View Page Source' choose karein or Ctrl + Click file link per click kra.");

/* 1. Write a script to greet your website visitor using JS alert
box.
2. Write a script to display following message on your web
page: */

alert('Error ! Please Enter a valid password');

/* 3. Write a script to display following message on your web
page: (Hint : Use line break) */

alert('Welcome to JS Land \nHappy Coding');

/* 4. Write a script to display following messages in sequence: */
alert('Welcome to JS Land...');
alert('Happy Coding.');

// 5. Generate the following message through browser’s
// developer console:
console.log("Hello... I can run JS through my web browser's console");


//! Variable, Strings & Numbers


// 1. Declare a variable called username
var username;

// 2. Declare a variable called myName & assign your full name to it
var myName = "Fuzail Ahmed"; // Replace with your actual full name

// 3. Write a script to:
// a. declare a JS variable, titled message
// b. assign “Hello World” to the variable message
// c. display the message in alert box

var message = "Hello World";
alert(message);

// 4.student’s bio data 
var studentName = "Fuzail Ahmed";
var studentAge = 17;
var studentInstitute = "SMIT (Saylani Mass IT Training)"
var studentCourse = "Web and App Development";

// Display data in console
console.log("Student Name: " + studentName);
console.log("Age: " + studentAge);
console.log("Institute: " + studentInstitute);
console.log("Course: " + studentCourse);

var age = 17;
console.log("I am " + age + " Years Old");

// Declare a variable called birthYear & assign to it your birth year.
// Show the following message in your browser

var myBirthDate = 2008;
console.log("My birth year is " + myBirthDate);
console.log("Data type of my declared variable is " + typeof myBirthDate);

// 5. Write a script to display the following console using one JS
// variable: pizza letter line by line  

var pizza = "PIZZA";
console.log(pizza);
console.log(pizza.slice(0,4));
console.log(pizza.slice(0,3));
console.log(pizza.slice(0,2));
console.log(pizza.slice(0,1));

// 6. Fortune Teller: Store the following into variables: number of
// children, partner’s name, geographic location, and job title.

var children = 3;
var partnerName = "Ariana Sky";
var geoLocation = "Tokyo, Japan";
var jobTitle = "Game Developer";

var fortune = "I Will be a " + jobTitle + "in " + geoLocation + ", and married to " + partnerName + " with " + children + " Children";
console.log(fortune);

// 7. Declare a variable called email & assign to it a string that represents your Email Address
var myEmail = "fuzail@gmail.com";

// Show the message in console
console.log('My Email Address is ' + myEmail);

// Show the message in an alert box
alert('My Email Address is ' + myEmail);

// 8. Declare a variable called book & give it the value “A smarter
// way to learn JavaScript”. Display the following message in an alert
// box:

var book = "A Smarter Way to Learn JavaScript";
alert('I am trying to learn from the book ' + book)