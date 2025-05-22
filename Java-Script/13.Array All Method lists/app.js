//! Part - 1
const countries = [
  "United States",
  "Canada",
  "Germany",
  "Brazil",
  "India",
  "Australia",
  "Japan",
  "South Africa",
  "France",
  "Mexico"
];
//? Update Value 
countries[3] = "Pakistan";

//? Add New Value
countries[10] = "Iran"; 

//?Empty
countries[12] = "Indonesia";
console.log(countries);

//! Part - 2 
const pakistaniCities = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Quetta",
  "Sialkot",
  "Hyderabad"
];
//? Add data in last - with push
pakistaniCities.push("Bahawalpur");

//? remove data in last - with pop
pakistaniCities.pop();

//?  Add in start - unshift
pakistaniCities.unshift("Gujranwala")

//? remove from start shift
pakistaniCities.shift();
console.log(pakistaniCities);

//? remove all data in array 
// pakistaniCities.length = 0; 

//! Part - 3 
const saudiBoyNames = [
  "Khalid",
  "Faisal",
  "Saud",
  "Abdullah",
  "Salman",
  "Turki",
  "Nasser",
  "Omar",
  "Khalid",
  "Abdullah",
  "Talal",
  "Majed"
];

//? find value with indexOf and lastIndexof value and starting point 
console.log(saudiBoyNames.indexOf("Abdullah",3));
console.log(saudiBoyNames.lastIndexOf("Khalid"));

//? Reverse Array 
console.log(saudiBoyNames.reverse());

//! Part - 4 
//? Starting, Index Delete Count, Add Value - splice method
const alphabet = [
  "A", "B", "C","F",
  "G", "H", "I", "J", "K", "L"
];
//*check value after deleting
// alphabet.splice(6,2,"i","j")
// console.log(alphabet);

//* check delete value 
// console.log(alphabet.splice(6,2,"i","j"));

//* Add Value 
// alphabet.splice(3,0,"D","E")
// console.log(alphabet);

//? slice method extract in array or string
//* not change original array shallow copy

// console.log(alphabet.slice(0,3).concat(alphabet.slice(7)));
// alphabet.splice(3,4)
// console.log(alphabet);

// var copy = alphabet.slice(4,-1);
// console.log(copy);

//! part 4 
//? concat method 
var numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var numbers2 = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
console.log(numbers1.concat(numbers2));

//? includes ya value ha ya nahi true or false
var cars = ["Toyota", "Honda", "Suzuki", "Hyundai", "Kia"];
console.log(cars.includes("Suzuki"));

