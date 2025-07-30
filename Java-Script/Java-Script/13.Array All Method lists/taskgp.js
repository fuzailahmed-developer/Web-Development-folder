//! Part 1: Fruits Array
const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Fig",
  "Grape",
  "Kiwi",
  "Lemon",
  "Mango",
  "Orange"
];

// Q1: Replace "Date" with "Dragonfruit"
fruits[3] = "Dragonfruit";

// Q2: Add "Papaya" at the end of the array
fruits.push("Papaya");

// Q3: Remove the first fruit from the array
fruits.shift();

// Q4: Print the updated fruits array
console.log(fruits);



//! Part 2: Cities Array
const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego"
];

// Q5: Insert "Dallas" and "Austin" after "Houston"
cities.splice(4,0,"Dallas","Austin");

// Q6: Remove "Phoenix" and "Philadelphia" from the array
cities.splice(6,2)

// Q7: Print the modified cities array
console.log(cities);


//! Part 3: Names Array
const names = [
  "Ali",
  "Sara",
  "Zain",
  "Sara",
  "Ali",
  "Fatima",
  "Zain"
];

// Q8: Find the first index of "Sara"
console.log(names.indexOf("Sara"));

// Q9: Find the last index of "Ali"
console.log(names.lastIndexOf("Ali"));
// Q10: Check if "Fatima" is included in the array
console.log(names.includes("Fatima"));

// Q11: Reverse the array and print it
console.log(names.reverse());




//! Part 4: Letters Array
const letters = ["X", "Y", "Z", "A", "B", "C", "D", "E"];

// Q12: Use slice to create a new array containing letters from index 2 to 5 (inclusive of start, exclusive of end)
var copy = letters.slice(2,6);
console.log(copy);

// Q13: Use splice to remove "A", "B", and "C" from the letters array
letters.splice(3,3);

// Q14: After removal, add "M" and "N" at index 3
letters.splice(3,0,"M","N");

// Q15: Print the updated letters array and the sliced array from Q12
console.log(letters);



//! Part 5: Numbers Array
const firstTen = [];
for (let i = 1; i <= 10; i++) {
  firstTen.push(i);
}

const nextTen = [];
for (let i = 11; i <= 20; i++) {
  nextTen.push(i);
}

// Q16: Combine firstTen and nextTen into one array and print it
var combine = firstTen.concat(nextTen);

// Q17: Check if the combined array includes number 15
console.log(combine.includes(15));

// Q18: Print the combined array in reverse order
console.log(combine.reverse());
