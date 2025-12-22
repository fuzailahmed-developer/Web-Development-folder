// Q1
const userAge: number = 33;
console.log(userAge)
// Q2
const colorsArr1: string[] = ["red", "green", "yellow"];
const colorsArr2: Array<string> = ["red", "green", "yellow"];
console.log(colorsArr1)
console.log(colorsArr2)
// Q3
const greet = (): void => {
    console.log("welcome..!")
}
greet()
// Q4
const userData: {name : string, isAdmin : boolean,score : number} = {
    name : 'ali',
    isAdmin : true,
    score : 83
}
console.log(userData)
// Q5
const val:unknown = 'ahmed ali';
console.log(val)
// Q6
let mode : 'light' | 'dark';
mode = 'dark'
console.log(mode)
// Q7 
let id : string | number = "33";
console.log(id)
// Q8
type Car = {
    brand : string,
    model : string,
    year : number
}
const car1 : Car= {
    brand : "Toyota",
    model : "G3",
    year : 2025
}
console.log(car1)
// Q9
type Direction = "up" | "down" | "left" | "right"
const up:Direction = "down" 
// Q10
let apiResponse: "success" | "fail"
console.log(apiResponse = "fail")