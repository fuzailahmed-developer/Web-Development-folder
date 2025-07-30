// const user = {
//     firstName: "Fuzail",
//     lastName: "Ahmed",
//     age: 18,
//     education: 12,
//     city: "Karachi"
// }


const user2 = {
    "first-Name": "Fuzail",
    lastName: "Ahmed",
    age: 18,
    education: 12,
    city: "Karachi"
}
//! 1 - recommended
// console.log(user2["first-Name"]);
//! 2 - dot
// console.log(user2.age);

//! update 
user2.laptop = "Lenovo"
user2["is_live"] = true;


const userData = {
    userName: "Muhammad",
    school: "Turk Public School",
    address : {
        city: "karachi",
        town: "baldia",
        street: "#1",
        road: "Num.7"
    }
}
console.log(userData.address.road );


//! delete value 
const myObject = {
  name: "Alice",
  age: 30,
  city: "New York"
};
delete myObject.age;
console.log(myObject);

//! Object.freeze and seal 

// seal update existing value but not add and remove 
const yourObject = {
  name: "Ali",
  age: 25,
  city: "Lahore",
  job: "Developer"
};

Object.seal(yourObject);
// not add 
yourObject.mouse = "nvda";
//but update
yourObject.city = "Karachi"

console.log(yourObject);

//! freeze not add not update and not delete 

const yourObject2 = {
  name: "Ali",
  age: 25,
  city: "Lahore",
  job: "Developer"
};

Object.freeze(yourObject2);
// not add 
yourObject2.mouse = "nvda";
// not update
yourObject2.city = "Islamabad"
console.log(yourObject2);



//! print object

//? 1.
let person = {
  name: "Ali",
  age: 25,
  isStudent: true
};

for (const key in person) {
    console.log(key ," : ", person[key]);
}