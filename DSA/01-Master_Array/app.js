//* Array is collection of data that hold multiple values
/* var username = 'fuzail ahmed';
console.log(username);

let userNames = ['ali', 'raza', 'ahmed'];
console.log(userNames);


let smartStudentScore = 90;
console.log(smartStudentScore); */

//* Object is Data structure that store data in key value pairs

/* const firstStudent = { name: 'umer', class: '10th' }

const students = [
  {
    name: 'usman',
    class: '9th'
  },
  {
    name: 'amir',
    class: '9th'
  },
  {
    name: 'kamran',
    class: '9th'
  }
]

const arrayConstructor1 = new Array()
arrayConstructor1[0] = 'ahmed'

console.log(arrayConstructor1);

const filledArray = new Array(5).fill(0)
console.log(filledArray);

const arrayOf = Array.of('the', 'quick', 'brown')
console.log(arrayOf);

const arrayFrom = Array.from('hello');
console.log(arrayFrom);

const arrayOfPlus = ['plus', ...arrayOf]
console.log(arrayOfPlus);

const fruits = ['apple', 'mango', 'banana']

const [apple, ...more] = fruits
console.log(more);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (const fruit of fruits) {
  console.log(fruit);
}

fruits.forEach((fruit) => {
  console.log("For Each:", fruit);
})

fruits.push('grapes')
const lastElement = fruits.pop()
console.log(lastElement);
console.log(fruits);


let nums = [2, 3, 4]
let result = nums.map((num) => num * num)
console.log(result);


let twoDimensionArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(twoDimensionArray); */


//! Leet Code...!

// input => nums = [1,3,5,6] target => 5
// output => 2 => return index if target found

// function findTarget(array, target) {

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return i
//     }
//     else if (array[i] > target) {
//       return i
//     }
//   }

//   return array.length

// }
// console.log(findTarget([1, 3, 5, 6], 5));
// console.log(findTarget([1, 3, 5, 6], 2));
// console.log(findTarget([1, 3, 5, 6], 7));



// async function sleep(millis) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(millis)
//     }, millis)
//   })
// }

// let t = Date.now()
// sleep(100).then(() => console.log(Date.now() - t)) // 100

// var compose = function (functions) {

//   return function (x) {
//     let result = x
//     for (let i = functions.length - 1; i >= 0; i--) {
//       let fn = functions[i]
//       result = fn(result)
//     }
//     return result
//   }
// };


// const fn1 = compose([x => x + 1, x => x * x, x => 2 * x])
// console.log(fn1(4));

// const fn2 = compose([x => 10 * x, x => 10 * x, x => 10 * x])
// console.log(fn2(1));


var plusOne = function (digits) {
  const lastDigit = digits[digits.length - 1]

  if (lastDigit != 9) {
    digits[digits.length - 1] = digits[digits.length - 1] + 1
    return digits
  }

  let newArray = []
  let carry = 0

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] == 9) {
      newArray[i] = 0
      carry = 1
    }
    else if (carry == 1) {
      newArray[i] = digits[i] + carry
      carry = 0
    }
    else {
      newArray[i] = digits[i]
    }
  }

  if (carry == 1) {
    newArray[0] = 1
    newArray[newArray.length] = 0
    carry = 0
  }

  return newArray

};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([1, 2, 9]));
console.log(plusOne([9, 9, 9]));
console.log(plusOne([9,8,9]));