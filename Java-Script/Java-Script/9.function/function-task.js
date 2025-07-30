// sum of two number 
function sum(a,b) {
    return a + b;
}
console.log(sum(10,5));

// subtract
function subtract (a,b){
    return a - b;
}
console.log(subtract(10,5));

//multiply
function multiply(a,b) {
    return a * b;
}
console.log(multiply(10,5));

//divided
function divided(a,b) {
    if (b === 0) {
        return 'Cannot divide by zero';
    }
    return a / b;
}
console.log(divided(10,0));


// odd and even find 
function isEven(e) {
    if (e % 2 === 0) {
        return 'is Even';
    }
    else{
        return 'is Odd'
    }
}
console.log(isEven(6));

// greater 
function greaterNum(a,b) {
    if (a > b) {
        return a;
    }
    else if (a === b) {
        return 'Both are equal';
    }
    else{
        return b;
    }
}
console.log(greaterNum(90,100));

