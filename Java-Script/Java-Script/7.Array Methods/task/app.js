

var skills = ['Html5', 'Css3' , 'Bootstrap'];
var bioData = ['John', 30, 'Male', 'Abc Company', skills];


if (typeof bioData == "object") {
var userInput = prompt("Check Skill Available")    

if (bioData[4].includes(userInput)) {
    console.log(true); 
}
} 
else {
    console.log("Not Found");
}

