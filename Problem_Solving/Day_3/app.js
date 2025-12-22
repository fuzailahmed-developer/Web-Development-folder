for(var i = 1; i <= 5; i++){
    let str = ''
    for(var j = 1; j <= i; j++){
        str+='*'
    }
    console.log(str)
}



for(var i = 5; i > 0; i--){
    let str = ''
    for(var j = 1; j <= i; j++){
        str+='*'
    }
    console.log(str)
}


for(var i = 1; i <= 2*5-1; i += 2){
    let str = ''
    str.padStart()
    for(var j = 1; j <= i; j++){
        str+='*'
    }

    console.log(str)
}