//! Part 1

//! 1 reverse Method
var reverseArray = ["Fuzail","Ahmed","Fakher","Usman","Tahir"];
console.log(reverseArray.reverse());

//! 2 splice method 
var alphabet = ["A","B","C","D","E"];
alphabet.splice(2,2,"B","A")
console.log(alphabet)

//! 3 slice extract value
const keyboards = [
  "Logitech G213",
  "Corsair K95",
  "Razer BlackWidow V4",
  "SteelSeries Apex Pro",
  "HyperX Alloy FPS",
  "Redragon K552",
  "Keychron K8",
  "Das Keyboard 4",
  "Microsoft Surface Keyboard",
  "Apple Magic Keyboard"
];
var find = keyboards.slice(5,8)
console.log(find);

//! 4 concat
var fruits1 = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
var fruits2 = ["Pineapple", "Strawberry", "Watermelon", "Papaya", "Kiwi"];
var collected = fruits1.splice(2).concat(fruits2.slice(2));
console.log(collected);

// * include
console.log(collected.includes("Apple"));

//! Part 2

//! 1 string to array with split

var myName = "Fuzail Ahmed";
var modified = myName.split("")
console.log(modified);
//? noted 
// () 1 element 
// ("") individual letter
// (" ") space eatch element
// * task reverse
var yourName = "Ahmed Raza";
var modified2 = yourName.split("").reverse().join(" ");
console.log(modified2);

//! 2 array to string join method
var words = ["Hello", "world", "this", "is", "JavaScript"];
var sentance = words.join(" ")
console.log(sentance);

//? noted 
// () quoma eatch elemet
// ("") remove space 1 string
// (" ") with space

//! 3 access first and last element 
var words1 = ["Hello", "world", "this", "is", "JavaScript"];
console.log(words1.at(1)); // first
console.log(words1.at(-1)); // last

//! part 3
//! 1 for each method 
var vegetables = [
  "Carrot",
  "Potato",
  "Tomato",
  "Onion",
  "Spinach",
  "Cabbage",
  "Cauliflower",
  "Broccoli",
  "Capsicum",
  "Eggplant"
];
vegetables.forEach( (currEle,Index) => {
    console.log(currEle,Index);
});
//! 2 filter 
//1
// var numbers = [3, 10, 7, 25, 8, 15, 2, 18, 30, 5];
// var numFilter = numbers.filter ( (currEle) => {
//     return currEle % 2 != 0
// });
// console.log(numFilter);
//2
var numbers = [3, 10, 7, 25, 8, 15, 2, 18, 30, 5];
var numFilter = numbers.filter ( (currEle) => {
    return currEle > 10
});
console.log(numFilter);
//! 3 find 1st value
var numbers1 = [5, 12, 8, 130, 44,140];
var bigNum = numbers1.find( (currEle) => currEle > 50 );
console.log(bigNum);

//! 4 some true or false
const muslimGirlsNames = [
  "Ayesha",
  "Fatima",
  "Zainab",
  "Maryam",
  "Hafsa",
  "Khadija",
  "Sumayya",
  "Amina",
  "Noor",
  "Sara"
];
console.log(muslimGirlsNames.some( (currEle) => currEle == "Noor"));

// * find index

console.log(muslimGirlsNames.findIndex( (currEle) => currEle == "Noor"));


//! 5 Map method
const ulEl = document.getElementById("ul");
const muslimGirlsNames1 = [
  "Ayesha",
  "Fatima",
  "Zainab",
  "Maryam",
  "Hafsa",
  "Khadija",
  "Sumayya",
  "Amina",
  "Noor",
  "Sara"
];
ulEl.innerHTML = muslimGirlsNames1.map( (currEle) => {
    return `<li>${currEle}</li>`
}).join("");

//! part 4 
//! 1 remove dulicate value 
const num = [8,2,1,0,1,1,1,3,2,10];
const removeDuplicate = new Set(num);
console.log(removeDuplicate);

//! 2 sort alphabet data
const mixedAlphabets = [
  "Q", "L", "B", "X", "A", "M", "R", "Z", "J", "E", 
  "D", "W", "C", "O", "H", "U", "G", "K", "F", "Y", 
  "T", "S", "V", "I", "N", "P"
];
console.log(mixedAlphabets.sort());

// * in Number 

const mixedNumbers = [
  17, 3, 25, 1, 12, 8, 21, 5, 30, 10,
  27, 4, 14, 9, 24, 2, 22, 6, 19, 28,
  7, 11, 15, 18, 20, 13, 16, 26, 23, 29
];
mixedNumbers.sort((a,b) => a-b)
console.log(mixedNumbers);

//! 3 find total
// const productPrices = [
//   1200, 800, 150, 70, 40,
//   300, 180, 90, 500, 250,
//   10, 25, 110, 100, 80,
//   130, 60, 350, 45, 600
// ];
// const total = productPrices.reduce( (accu,currEle) => {
//     return accu + currEle
// },0)
// console.log(total);


const productPrices = [
  1200, 800, 150, 70, 40,
  300, 180, 90, 500, 250,
  10, 25, 110, 100, 80,
  130, 60, 350, 45, 600
];
var total = productPrices.reduce((acc,currEle) => acc + currEle,0);
console.log(total);
