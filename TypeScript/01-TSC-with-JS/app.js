// for use typeScript two main point
// 1. compile typescript to js using tsc app.ts - automatically generate js file
// 2. run server using node app.js
// string type  
var myName = "fuzail";
console.log(myName);
var a = "xyz";
a = "8";
console.log(a);
// number type 
var number = 18;
console.log(number);
// concat
var fName = "fuzail";
var lName = "ahmed";
var fullName = "".concat(fName, " ").concat(lName);
console.log(fullName);
// string array type
var fruitsArr = ["apple", "mango", "banana"];
console.log(fruitsArr);
// number array type
var numberArr = [1, 2, 3, 4, 5];
console.log(numberArr);
// multiple array type
var detailsArr = ["aliRaza", true, 34, "karachi"];
for (var _i = 0, detailsArr_1 = detailsArr; _i < detailsArr_1.length; _i++) {
    var element = detailsArr_1[_i];
    console.log(element);
}
// simple loop
for (var i = 0; i < 5; i++) {
    console.log(i);
}
// function
var greetUser = function (user) {
    if (user === void 0) { user = "fuzail"; }
    console.log("Hello", user + "!");
};
greetUser("ahmed");
// function with multiple parameters
var newUser = function (name, age, skills) {
    return ({
        name: name,
        age: age,
        skills: skills
    });
};
var result = newUser("ali", 19, ["HTML", "CSS", "JS"]);
console.log(result);
// object with inline types
var userInfo = {
    name: "ali",
    age: 22,
    city: "karachi"
};
console.log(userInfo);
// nested object with inline types
var student = {
    name: "Raza",
    address: {
        country: "pakistan",
        city: "lahore"
    },
    skills: [44, true, "HTML"]
};
var u1 = {
    name: "uzair",
    age: 15,
    email: "uzair@gmail.com"
};
var u2 = {
    name: "uzair",
    age: 15,
    skills: [33, true, "CSS"]
};
console.log(u1);
console.log(u2);
var allPerson = [
    {
        name: "ali",
        city: "lahore"
    },
    {
        name: "mustafa",
        city: "islamabad"
    }
];
console.log(allPerson);
