//! Noted : by fuzail This is !Important
 
document.write("<h1>JavaScript read code line by line : </h1>");
document.write("<p>Print any console output in output-screen Use <b> document.write </b> </p>");
document.write("without any element it will considered as string value");
document.write("<h2>Difference between undefine and not define :</h2>");
document.write("<p><b>undefine</b> means : define ha kahi na kahi mager js or browser ku nahi pata ka ha.</p>");
document.write("<p><b>not define</b> means : define hi nahi ha.</p>");

//! Notes End 

//? undefined example 
// console.log(str);
// var str = 'string';
//? not define example 
// console.log(num);


//! Post Increment and Decrement abc++
//! Pre Increment and decrement ++abc

//? post example 
// var num = 4;
// console.log(num);
// console.log(num++);
// console.log(num);

//? pre example 
// var num = 4;
// console.log(num);
// console.log(++num);
// console.log(num);

//? post decrement example 
// var num = 4;
// console.log(num);
// console.log(num--);
// console.log(num);

//? pre decrement example 
// var num = 4;
// console.log(num);
// console.log(--num);
// console.log(num);

//* mind question 
//? Q1. 
var num = 4;
var eq = num + num++ + ++num;
console.log(eq);
//? Q2. 
// var num = 5;
// var eq = num + num++ + num++;
// console.log(eq);
//? Q3. 
// var num = 4;
// var eq = num + num++ + --num;
// console.log(eq);

// var num = 2;
// var eq = ++num + num++ + ++num + num + num++;
// console.log(eq);

// var num = 5;
// var eq = num++ + --num + ++num + num-- + num + ++num;
// console.log(eq);


//! importact 
// var num = 20;
// var eq = ++num + num-- + --num + num++ + ++num + num-- + --num + ++num + num++;
// console.log(eq);
// 181 answer

//! Hint:
// Pehle parentheses solve karo.

// Phir multiplication aur division (left to right).

// Last mein addition aur subtraction (left to right).

//! More 
// var result1 = (2 * 4) * 4 + 2;
// console.log(result1);

// var  eq = 2 + (5 * (3 + 1));