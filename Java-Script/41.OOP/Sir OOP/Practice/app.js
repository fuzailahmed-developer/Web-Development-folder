//! piller no : 1 Object...!

// Noted : this keyWord not work in arrow function 

const obj = {
    user: "Ahmed",
    greet() {
        console.log(`Hello ${this.user}`);
    }
}
obj.greet()

//! piller no : 2 Class...!

class Person1 {
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    birthYear (){
        return new Date().getFullYear() - this.age
    };
    jointName (){
        return `${this.firstName} ${this.lastName}` 
    }
}


let u1 = new Person1("fuzail","ahmed",17)
let u2 = new Person1("ali","raza",22)
console.log(u1);

//! piller no : 3 inheritance...!

class Intro {
    constructor(realName){
        this.name = realName
    }
    showName(){
        return `my real name is ${this.name}`
    }
}


class Fuzail extends Intro{
    constructor(name){
        super(name)
    }
}

let s1 = new Fuzail("ali");
s1.showName() // parent function
console.log(s1);


//! task 

class StdName {
    constructor(name){
        this.name = name
    }
    speak(){
        return `Hello, my name is ${this.name}`
    }
}


class StdRes extends StdName{
    constructor(uName,grade){
        super(uName);
        this.grade = grade
    }
    result(){
        return `${this.name} is in grade ${this.grade}`
    }
}


let student1 = new StdRes("Ali",10)
console.log(student1.result());
console.log(student1.speak());