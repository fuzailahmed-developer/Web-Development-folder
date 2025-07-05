//! 1.
var colors = ["red","green","yellow","pink","blue","orange","black"];
let [first,second,third] = colors;
// varialbe names is not metter 
console.log(first);
console.log(second);
console.log(third);

//! 2.
// accuss between 
let [,,,,,,a] = colors 
console.log(a);


//! 3
let person = {
    userName : "fuzail",
    age : 18,
    city : "Karachi"
}
let {userName,city} = person
console.log(userName);
console.log(city);