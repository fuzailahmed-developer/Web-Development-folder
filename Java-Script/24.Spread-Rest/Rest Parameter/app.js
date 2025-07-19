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

function storeData (...rest){
    console.log(rest);
    
}
storeData("ali","ahmed","ayan","hamid","fuzail")
