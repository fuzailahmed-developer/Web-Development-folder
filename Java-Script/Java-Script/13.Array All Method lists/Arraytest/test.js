//! 1. Declare and initialize a mixed array (Use all data types).
var mixDatatypes = [true,undefined,22,"Hello World"];
console.log(mixDatatypes);

//! 2. Declare and Initialize an array and store available mobile
//! networks in Pakistan.
var networks = ["Jazz","Zong","UPhone","Telenore"];
console.log(networks);

//! 3. store available education qualifications in Pakistan
var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MSM", "Phil", "PhD"];
console.log(education);

//! 4.store top cartoons one by one
var topCartoons = [];

topCartoons.push("Tom and Jerry");
topCartoons.push("SpongeBob SquarePants");
topCartoons.push("Ben 10");
topCartoons.push("Doraemon");

console.log(topCartoons.length);
console.log(topCartoons);

//! 5. Car store and Show
var favCars = ["Toyota Corolla","Honda Civic","Land Cruiser","Suzuki"];
console.log(favCars);
console.log("First index of the Array : " + favCars.indexOf("Toyota Corolla"));
console.log("Car at First index of the Array : " + favCars[0]);
console.log("Last index of the Array : " + favCars.indexOf("Land Cruiser"));
console.log("Car at First index of the Array : " + favCars[3]);

//! 6. Find Percentage
var studentName = ["Ali","Omar","Ahmed"];
var studentScore = [333,432,413];
var total = 500;

console.log("Score of " + studentName[0] + " is " + studentScore[0] + " Percentage " + (studentScore[0]/total*100).toFixed(2) + "%" );

console.log("Score of " + studentName[1] + " is " + studentScore[1] + " Percentage " + (studentScore[1]/total*100).toFixed(2) + "%" );

console.log("Score of " + studentName[2] + " is " + studentScore[2] + " Percentage " + (studentScore[2]/total*100).toFixed(2) + "%" );

//! Color Program 

//? a
var Colors = ["blue", "white", "black"];
console.log(Colors);

//? b
var addColorStart = Colors.unshift(prompt("Add Color in Start"));
var addColorEnd = Colors.push(prompt("Add in last"));
console.log(Colors);

//? c
Colors.unshift("red");
Colors.unshift("yellow");
console.log(Colors);

//? d
Colors.shift();
console.log(Colors);

//? e
Colors.pop();
console.log(Colors);

//? f
var addColorIndex = prompt("Enter Index Number");
var addColorName = prompt("Enter Color Name");
Colors.splice(addColorIndex,0,addColorName);
console.log(Colors);

//? g 
var deleteColorIndex = prompt("Enter Delete Index Number");
var deleteColorCount = prompt("Enter Delete Count");
var addMoreColorName = prompt("Add Color Name");
Colors.splice(deleteColorIndex,deleteColorCount,addMoreColorName);
console.log(Colors);

//! 10.Copy city name
var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var Copy = cities.slice(2,4)
console.log(Copy);

//! 12 (FIFO-First In First Out)
var FIFO = [];
FIFO.push("Keyboard");
FIFO.push("Mouse");
FIFO.push("CPU");
FIFO.push("Laptop");
console.log(FIFO);

console.log(FIFO.shift());
console.log(FIFO.shift());
console.log(FIFO.shift());
console.log(FIFO.shift());

//! 13 (LIFO-Last In First Out)
var LIFO = [];
LIFO.push("Keyboard");
LIFO.push("Mouse");
LIFO.push("CPU");
LIFO.push("Laptop");
console.log(LIFO);

console.log(LIFO.pop());
console.log(LIFO.pop());
console.log(LIFO.pop());
console.log(LIFO.pop());

//! 14. Matrix
var matrix = [[0,1,2,3],
              [1,0,1,2],
              [2,1,0,1]];
console.log(matrix[0][0],matrix[0][1],matrix[0][2],matrix[0][3]);
console.log(matrix[1][0],matrix[1][1],matrix[1][2],matrix[1][3]);
console.log(matrix[2][0],matrix[2][1],matrix[2][2],matrix[2][3]);

//! 15. How to access the first and last elements of the array:
//! Array could be of any size.

var boysNames = ["Ali", "Ahmed", "Bilal", "Hassan", "Usman", "Omar", "Hamza", "Zaid", "Imran", "Kashif"];
//? 1
var firstAccess = boysNames[0];
console.log(firstAccess);

//? 2
var lastAccess = boysNames[boysNames.length -1];
console.log(lastAccess);

//! 16. You have an array, Set array length to 0.
var arr = ["john", "smith", "andrew", "ahmed"];
arr.length = 0;
console.log(arr.length);

//! 17. Make an array and ask for the user input and check if user input is exist in the given array.
var Names = ["Ali", "Ahmed", "Hamza", "Usman", "Bilal"];
var userInput = prompt("Enter Name");
if (Names.includes(userInput)) {
    console.log(userInput + " How Are You!");
    
} else {
    console.log("Not Found");
    
}

//! 18. You have an array of animals add these two animals after 2 elements (Zebra, Dinosaur)
var animals = ["Cat", "Dog", "Elephant", "Lion"];
animals.splice(3,0,"Zebra","Dinosaur");
console.log(animals);

//! 19. Take a user input from user and check if the given string is palindrome.
var str = prompt("Check Palindrome");
if (str == str.split("").reverse().join("")) {
    console.log(str,"is Palindrome");
    
} else {
    console.log(str,"is not a Palindrome");
}

//! 20. You have an array of 10 elements, What is the index of the last element.
//? output Index Number is  : 9
//? output Length is  : 10

//! 21.Extract keyword ‘users’ from the given url (Use array methods).
var url = "https://jsonplaceholder.typicode.com/users";
var urlCopy = url.slice(37);
console.log(urlCopy);

//! 22 Access 24 from multidimensional array:
var x = [
['Jack', 24],
['Sara', 23],
['Peter', 24]
];
console.log(x[0][1]);
console.log(x[2][1]);

