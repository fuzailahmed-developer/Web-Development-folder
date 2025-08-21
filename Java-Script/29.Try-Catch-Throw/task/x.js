try {
  let name = "Fuzail";
  console.log(name);
  console.log(age); // age is not defined
  console.log("Code after age log");
} catch (error) {
  console.log("Error caught:", error.message);
}


let userInput = Number(prompt("Enter Number"))

try {
    if (isNaN(userInput)) {
        throw "Please enter a valid number"
    }
    else if(userInput == "" || 0){
        throw "Input cannot be empty"
    }
    else{
        console.log(userInput * userInput);
    }
    
} catch (error) {
    console.log("Error caught: " + error);
}

