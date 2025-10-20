// for use typeScript two main point
// 1. compile typescript to js using tsc app.ts - automatically generate js file
// 2. run server using node app.js



// string type  

const myName: string = "fuzail"
console.log(myName)

let a: string = "xyz"
a = "8";
console.log(a)

// number type 

const number: number = 18;
console.log(number)

// concat

const fName: string = "fuzail"
const lName: string = "ahmed"
const fullName: string = `${fName} ${lName}`
console.log(fullName)

// string array type

const fruitsArr: string[] = ["apple", "mango", "banana"]
console.log(fruitsArr)

// number array type

const numberArr: number[] = [1, 2, 3, 4, 5]
console.log(numberArr)


// multiple array type

const detailsArr: (string | boolean | number)[] = ["aliRaza", true, 34, "karachi"]

for (const element of detailsArr) {
    console.log(element)
}

// simple loop

for (let i: number = 0; i < 5; i++) {
    console.log(i)
}


// function

const greetUser = (user: string = "fuzail") => {
    console.log("Hello", user + "!")
}
greetUser("ahmed")

// function with multiple parameters

const newUser = (
    name: string,
    age: number,
    skills: string[]
) => {

    return (
        {
            name,
            age,
            skills
        }
    )

}
const result = newUser("ali", 19, ["HTML", "CSS", "JS"])
console.log(result)


// object with inline types

const userInfo: { name: string, age?: number, city: string } = {
    name: "ali",
    age: 22,
    city: "karachi"
}
console.log(userInfo)


// nested object with inline types

const student : {
    name : string,
    address : {
        country : string,
        city : string
    },
    skills : (boolean | number | string)[]
} = {
    name : "Raza",
    address : {
        country : "pakistan",
        city : "lahore"
    },
    skills : [44,true,"HTML"]
}

// object best practice interface method with optional chaining

interface User {
    name : string,
    age : number,
    skills? : (number | boolean | string)[]
    email? : string
}

const u1 : User = {
    name : "uzair",
    age : 15,
    email : "uzair@gmail.com"
}
const u2 : User = {
    name : "uzair",
    age : 15,
    skills : [33,true,"CSS"]
}

console.log(u1)
console.log(u2)


// array object 

interface Person {
    name : string,
    age? : number,
    city : string
}

const allPerson : Person[] = [
    {
        name : "ali",
        city : "lahore"
    },
    {
        name : "mustafa",
        city : "islamabad"
    }
]

console.log(allPerson)