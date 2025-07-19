//! existing array destructing 
let arr = ["ali","ahmed","umar"];
let [var1,,var3] = arr
console.log(var3,var1);

//! new array destructing

let [value1,value2,value3] = ["Pakistan","Iran","UAE"];
console.log(value3);

//! Destructing Obj

let obj = {
    myName : "fuzail",
    age : 18,
    city : "karachi"
}
let {myName,age,city} = obj
console.log(myName);
console.log(age);
console.log(city);


//! Enhance Object literals

let person = "ali"
let personAge = 18
let personCity = "Karachi"

let obj1 = {
    person,
    personAge,
    personCity
}
console.log(obj1);
