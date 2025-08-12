//! pro seasonal programming
// const data = {
//     name : "fuzail",
//     city : "karachi",
//     age : 17
// }

// function getBirthYear (age){
//     return new Date().getFullYear() - age
// }
// let rsBirthYear = getBirthYear(data.age)
// console.log(rsBirthYear);

//! 4 pillar of OOP
/*
Encapsulation
Abstraction
Inheritance
Polymorphism
*/

//! 1. Encapsulation ka matlab ha data ku aik jagha fit krna or bahir ki duniya sa hide krna means data hiding

const data = {
    name: "fuzail",
    city: "karachi",
    age: 17,
    getBirthYear: function () {
        return new Date().getFullYear() - this.age
    }
}
//! 2.Abstraction hiding the complexity
// function getBirthYear (age){
//     return new Date().getFullYear() - age 
// }

console.log(data.getBirthYear());

{
    //! Factory function Reusable 
    // issue : bar bar memory ma new function create krta ha

    const createUser = (firstName, lastName, age) => {
        let obj = {
            firstName,
            lastName,
            age,
            getBirthYear() {
                return new Date().getFullYear() - this.age
            }
        }
        return obj
    }

    const user1 = createUser("ali", "raza", 33)


    //! fix issue 

    function calculateBirthYearIs() {
        console.log(this);
        return new Date().getFullYear() - this.age
    }

    function calculateBirthYear (firstName,lastName,age){
        let personObj = {
            firstName,
            lastName,
            age,
            calculateBirthYearIs
        }
        return personObj
    }
    let us1 = calculateBirthYear("fuzail","ahmed",37)
    console.log(us1.calculateBirthYearIs());
}