//? make reusable code 
// function sum(a,b) {
//     return a + b;
// }
// console.log(sum(6,7));
// console.log(sum(13,7));
// console.log(sum(7,7));

//! 1.function declaration 
//f-keyword  f-name   
function     name  (params) {
    // f-body
}
//! 2.function invocation
// function greet() {
//     console.log('function is a block of reusable code');
// }
// greet(); // invocation

//! 3.function parameter
// function name(parameter1,parameter2) {
    
// }
//! 4.function argument
// function greet (parameter1,parameter2) {
// }
// greet(argument1,argument2);

//* practice 
// argument value go to parameter to console variable - //! Important 

// function greet(name) {
//     console.log('hello ' + name + ' welcome to our webpage');
// }
// greet('fuzail');
// greet('ahmed');

//! 5.Function expressions

//? A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it becomes a named function expression.

var result = function sum(a,b) {
    console.log(a + b);
}
result(11,9);

//! 6.Function anonymous no name in function assign in variable

//? A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it becomes a named function expression.

var result = function(a,b) {
    console.log(a + b);
}
result(11,9);

//!  1.Return Keyword
//? Return Keyword: In JavaScript, the return statement is used within a function to specify the value that the function should produce or provide back to the code that called it. The return statement stops the execution of a function and sends a value back to the caller

function newF(a,b) {
    // console.log(a + b); //! only display and undefine problem
    return a + b;
}
console.log(newF(10,20));
