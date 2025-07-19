
//! 1.array shallow Copy 
var person = ["fuzail","Imran","Kami","Nomi"];
var copyPerson = ["Mustafa",...person,"furkan","Amir"]
console.log(copyPerson);

//! 2. Concat Array
var city = ["Karachi","Lahore","Multan","Peshawer","Islamabad"];
var town = ["baldia","Tariq Road","Shera ha Faisal","Kamari","Malir"];

var concat = [...city,...town]
console.log(concat);

//! 3. Spread Argument

function sum(x,y,z) {
    return x + y + z
}
let num = [3,5,6];
console.log(sum(...num));

//! 4 . copy object - shallow copy

var userData = {
    Name : "Fuzail",
    age : 18,
    City : "Karachi",
    Class : 10
}
var userData2 = {
    Name : "Ahmed",
    age : 18,
    City : "Islamabad",
}
// copy 
var copyData = {...userData}
console.log(copyData);
// concat
var combined = {...userData,...userData2}
console.log(combined);

//! 5.string to array 

var str = "hello"
var copyStr = [...str]
console.log(copyStr);

