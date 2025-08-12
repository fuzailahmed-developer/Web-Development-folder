//! piller #01 - object....!

// noted : in arrow function this keyword is not work

const obj = {
    name: "ali",
    age: 33,
    city: "karachi",
    greet() {
        console.log(this.name); // refer this parent obj
    }
}

obj.greet()


// console.log(this); refer window

//! Piller #02 - Class....!

class newPerson {
    constructor(name) {
        this.name = name
    }

}

let user1 = new newPerson("ali");
console.log(user1);



//! Piller #03 - Inheritance....!


class Person {
    constructor(name) {
        this.name = name
    }
    ms() {
        console.log(`hello ${this.name}`);
    }
}
let person1 = new Person("ahmed");
console.log(person1);


class Inherit extends Person {
    constructor(name, title) {
        super()
        this.name = name,
            this.title = title
    }
}
let emp1 = new Inherit("ali", "Developer")
console.log(emp1);
emp1.ms()

//! Piller #04 - polymorphism ....!
class Animals {
    speak() {
        console.log("Animals are talking each others");
    }
}

class Human {
    speak() {
        console.log("Human are talking each others");
    }
}

let newAnimals = new Animals()
newAnimals.speak()

let newHuman = new Human()
newHuman.speak()


class BankAccount {
    #balance = 0;

    deposit(amount){
        this.#balance += amount
    }
}
let us1 = new BankAccount()
us1.deposit(300)
us1.deposit(400)
console.log(us1);