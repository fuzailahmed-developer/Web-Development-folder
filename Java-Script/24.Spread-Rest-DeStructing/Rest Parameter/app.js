function sum(...num){
    console.log(num);
    var total = 0;
    for (var i = 0; i < num.length; i++){
        total += num[i]
    }
    console.log(total);
}
sum(1,3,5,6,2,3)


// with reduce method

function sum(...number){
    return number.reduce((a,b) => a + b)
}
console.log(sum(10,10,10,1020,30));