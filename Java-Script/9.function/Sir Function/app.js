var age = 25;
function sum (num){
    var input = 10;
    return num + input;
}
console.log(sum(10));

//2 

function checkCondition (num) {
    console.log(num);
    if (num % 2 == 0) {
        var divisibleBy2 = true;
        console.log(divisibleBy2);
    } else {
        divisibleBy2 = false;
        console.log(divisibleBy2);
    }
    console.log(divisibleBy2);
}
var num = Math.ceil(Math.random() * 6);
checkCondition(num);