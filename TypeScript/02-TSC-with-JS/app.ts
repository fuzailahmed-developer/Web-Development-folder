// Generic Type...!

interface User<T, U> {
    name: string,
    age: number,
    random: T,
    extra: U
}

const user_1: User<string, string[]> = {
    name: "ahmed",
    age: 33,
    random: "giftBox",
    extra: ["HTML", "CSS"]
}

console.log(user_1)

const user_2: User<string[], boolean> = {
    name: "raza",
    age: 23,
    random: ['surprise'],
    extra: false
}

console.log(user_2)



// generic type with Object

// why we use extends object for inshore the type is object not string etc..

interface Company<Type extends object> {
    name: string,
    multiLocation: boolean,
    department: Type
}

const company_1: Company<{ mobileDep: boolean, sap: boolean }> = {
    name: "abc",
    multiLocation: true,
    department: {
        mobileDep: true,
        sap: false
    }
}
console.log(company_1)


// enum for use define data set for constent values..!

enum Role {
    Admin,
    User,
    Guest
}

const role = Role.Admin

if (role == Role.Admin) {
    console.log("Admin")
}


enum Direction {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

const move = Direction.UP;
console.log(move); // "UP"



enum Days {
    Monday,    // 0
    Tuesday,   // 1
    Wednesday, // 2
    Thursday,  // 3
    Friday     // 4
}
console.log(Days.Wednesday); // 2


// void - for create testing function not return anything

function testing(name: string): void {
    const userName = name;
    console.log(userName)

    // return 8 // not return any thing
}

testing("fuzail")

// return - only string

function testing2(name: string): string {
    const userName = name;
    return userName
    // return 8 // return only string
}

console.log(testing2("fuzail"))


// type object and difference between interface object and type object 

// 1. in type object before {} = need but not in interface
// 2. you can create same name interface but not in type

//! interface

interface NewUser {
    name : string,
    age : number
}

interface NewUser {
    city : string
}


const newUser_1 : NewUser = {
    name : "fuzail",
    age : 15,
    city : "karachi"
}

//! type

// type NewUser1 = {
//     name : string,
//     age : number
// }

// type NewUser1 = { Duplicate identifier
//     city : string
// }


// const newUser_1 : NewUser1 = {
//     name : "fuzail",
//     age : 15,
//     city : "karachi"
// }