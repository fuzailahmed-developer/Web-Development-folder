// find max number 
function maxOfThree(a, b, c) {
  let max;

  if (a >= b && a >= c) {
    max = a;
  } else if (b >= c) {
    max = b;
  } else {
    max = c;
  }
  return max;
}

console.log(maxOfThree(3, 5, 1))


// Check if a Number is Positive, Negative, or Zero


function numberChecker(n) {
  if (n > 0) {
    return 'Positive'
  } else if (n < 0) return 'Negative'
  else return 'Zero'
}
console.log(numberChecker(0))


// bill total

let units = +prompt('Enter Units');
let totalBill = 0


if (units <= 100) totalBill = units * 5

else if (units <= 200) {
  totalBill = (100 * 5) + (units - 100) * 7
}
else if (units <= 300) {
  totalBill = (100 * 5) + (100 * 7) + (units - 200) * 10
}
else if (units > 300) {
  totalBill = (100 * 5) + (100 * 7) + (100 * 10) + (units - 300) * 12
}
console.log(totalBill)


// check vowel 

function checkVowel(c = '') {
  let char = c.toLowerCase()
  if ('aeiou'.includes(char) && char != '') {
    return 'vowel'
  } else if (/[a-z]/.test(char)) {
    return 'Constant'
  }
  return 'Not a valid Number'
}

checkVowel("As")

// check leapYear 


function isLeapYear(year){
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      console.log(year.toString() ,'Is Leap Year')
  } else {
    console.log('Is Not Leap Year')
  }
}

isLeapYear(2024)


// check letter format


function CharacterChecker(char){

  if (char.trim() == '') {
    return;
  }

  if (/[a-z]/.test(char)) {
      console.log('Lower Case Letter')
  }
  else if(/[A-Z]/.test(char)) {
      console.log('Upper Case Letter')
  }
  else if(/[0-9]/.test(char)) {
      console.log('Number')
  } else {
    console.log('Special Character')
  }
}

CharacterChecker('*')