let student = {
  name: "Fuzail",
  age: 20,
  isEnrolled: true,
  grade: "A",
  city: "Islamabad",
  rollNumber: 1023,
  department: "Computer Science",
  isScholarship: false,
  hobbies: ["reading", "coding", "traveling"],  // ✅ array
  marks: [85, 90, 88, 92, 95],                  // ✅ array
  greet: function () {                          // ✅ function
    console.log("Hello, my name is Fuzail" );
  }
};

// get value of object 
console.log(student.age);

// update value
student.age = "30"
console.log(student);

// delete value
delete student.grade
console.log(student);

// check available
console.log(student.hasOwnProperty("age"));

// add new
student.zip = "6565"

// call function - object
student.greet()

// call array
console.log(student.marks);

// array Object 

let employ = [
    {
        id: 1,
        emName : "Fuzail",
    },
    {
        id: 2,
        emName : "Ahmed",
    },
    {
        id: 3,
        emName : "Muhammad",
    },
    {
        id: 4,
        emName : "Ali",
    },
    {
        id: 5,
        emName : "Kami",
    }
];
// loop array 
for(var i = 0; i < employ.length; i++){
    console.log(employ[i]);
}

// direct loop object

let person = {
  name: "Ali",
  age: 25,
  city: "Lahore"
};


for (const key in person) {
    console.log(key + " : " + person[key]);
}


// shallow vs deep copy
let person1 = {
  name: "Ali",
  age: 25,
  city: "Lahore"
};

// Shallow copy
let copyPerson1 = { ...person1 };

copyPerson1.zip = "555";
copyPerson1.city = "Karachi";

console.log("Original:", person1);
console.log("Copy:", copyPerson1);

// depp copy 
let copyPerson2 = JSON.parse(JSON.stringify(person1))


// object seal and freeze
//  -  Object.seal() change only existing value not add and delete 
//  -  Object.freeze() not delete change and add 