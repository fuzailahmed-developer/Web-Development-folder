//? callBack 

// example - 1 
function greet(name, cb) {
    console.log(`Hello ${name}`);
    cb()
}

greet("fuzail", function message() {
    console.log("How are you?");
})

// example - 2
function calculate (a,b,cb) {
    let result = cb(a,b)
    return result
}

function add(x,y){
    return x + y
}

let result = calculate(55,45,add)
console.log(result);

//? HOF 

// example - 1 

function multi(num1){
    return (num2) => {
        return num1 * num2
    }
}
const resultMulti = multi(5)(2)
console.log(resultMulti);


// example - 2

function greetUser (cb,userName) {
    let showCb = cb()
    let name = userName

    return () => {
        return `${showCb} ${name}`
    }
}

function showUser () {
    return "Welcome,"
}

const showResult = greetUser(showUser,"Fuzail")()
console.log(showResult);