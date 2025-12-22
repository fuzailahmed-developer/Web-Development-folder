// function return type 

function test():string{
    return "Testing Complete"
}

// function multiple return type 
function test2(): string | number{
    return 3
}

// not return void type

function test3(): void{
    console.log("Hello")
}
// return any type

function test4(): any{
    return ["1","2","3"]
}