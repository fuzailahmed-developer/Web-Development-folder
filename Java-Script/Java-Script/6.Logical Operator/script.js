//! Task: Student Eligibility Checker OR Operator 
// var isNewStudent = false;
// var hasReferral = true;
// if (isNewStudent == true || hasReferral == true) {
//     console.log("Discount applied");
// }else{
//     console.log("No discount");
// }
//! End Operator
// var num = +prompt('Enter Number');
// if (num >= 5 && num <= 10) {
//     ++num;
//     console.log(num);
// } else{
//     console.log('Invalid Number');
// }
//! nested if else 
// var age = prompt('Enter Your Age');
// if (age >= 18) {
//     var userInput = prompt('Your Name');
//     console.log(userInput, "you are eligible ");
// } else {
//     console.log('not eligible');
// }

//! task 
var age = +prompt('Enter Your Age');
if (age > 18) {
    var favMovie = prompt('Enter Your Favorite Movie');
    console.log('You can watch ' + favMovie + ' movies')
} else{
    console.log('You are not allowed to watch adult movies');
    
}
