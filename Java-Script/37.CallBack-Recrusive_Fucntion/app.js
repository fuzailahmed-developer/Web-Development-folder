//! callback function 
function greet(name, callBack) {
    console.log(`${name} ${callBack()}`);
}
function sayBy() {
    return "Good By!"
}
greet("fuzail", sayBy)

// easy task 

let printResult = (a, b, cbResult) => {
    console.log(cbResult(a, b));
}

printResult(3, 5, (num1, num2) => {
    let result = num1 + num2
    return result
})


// medium task 

let names = ["ali", "sara", "fuzail"];

function processArray(arr, callBack) {
    for (const element of arr) {
        callBack(element)
    }
}

processArray(names, function (name) {
    console.log(name.toUpperCase());
})


// medium + 

function calculator(a, b, callBack) {
    console.log(callBack(a, b));
}

calculator(10, 5, (x, y) => {
    let eq = x - y
    return eq
})

// hard task

function foo(num, callBack) {
    for (var i = 0; i < num; i++) {
        callBack()
    }
}

foo(7, () => {
    console.log("hello");
})

// hard task 
let numbers = [3, 10, 34, 33, 1, 33, 66, 74, 11];

const filterNum = (arr,callBack) => {
    let newArray = []
    for (const element of arr) {
        if (callBack(element)) {
            newArray.push(element)
        }
    }
    return newArray
}

let result = filterNum(numbers,(num) => {
    return num > 10
})

console.log(result);

// real world task 

let products = [
  { name: "Laptop", price: 85000, category: "Electronics" },
  { name: "Shirt", price: 1500, category: "Clothing" },
  { name: "Mobile", price: 65000, category: "Electronics" },
  { name: "Shoes", price: 3000, category: "Footwear" },
];


function findItem(item,callBack){
    let filteredArray = []
    for(let element of item){
        if (callBack(element.category)) {
            filteredArray.push(element)
        }
    }
    return filteredArray
}
let filterItem = (getItem) => {
    if (getItem == "Electronics") {
        return getItem
    }
}

let result1 = findItem(products,filterItem)
console.log(result1);

