// print 1 to 5

for(var i = 1; i <= 5; i++){
    console.log(i)
}


// print 5 to 1

for(var i = 5; i > 0; i--){
    console.log(i)
}

// print even

for(var i = 0; i <= 10; i++){
    if (i % 2 == 0) {
         console.log(i)
    }
}

// some of natural numbers

let sum = 0;
for(var i = 1; i <= 5; i++){
    sum+=i
}
console.log(sum)

// factorial 

let fac = 1;
for(var i = 5; i > 0; i--){
    fac *= i
    console.log(fac)
}

console.log(fac)

// sum of all even numbers

let sum2 = 0;

for(var i = 0; i <= 10; i++){
    if (i % 2 == 0) {
         sum2 += i
    }
}
console.log(sum2)


// print square

for(var i = 5; i > 0; i--){
    console.log(i*i)
}


// print all number divisible by 3 and 5

for(var i = 0; i <= 30; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i)
    }
}

// sum of all odd number

let sum3 = 0;

for(var i = 0; i <= 10; i++){
    if (i % 2 != 0) {
        sum3 += i
    }
}
console.log(sum3)


// cube

for(var i = 1; i <= 5; i++){
    console.log(i * i * i)
}

// even and perfect square

for(var i = 1; i <= 20; i++){
    if(i % 2 == 0 && Number.isInteger(Math.sqrt(i))){
        console.log(i)
    }
}