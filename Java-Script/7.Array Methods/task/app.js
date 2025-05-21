

var skills = ['Html5', 'Css3' , 'Bootstrap'];
var bioData = ['John', 30, 'Male', 'Abc Company', skills];


if (typeof bioData == "object") {

var userInput = prompt("Check Skill Available")    

} if (userInput == bioData[4][0] || userInput == bioData[4][1] || userInput == bioData[4][2]) {
    console.log(true);
}
else {
    console.log("Not Found");
}

