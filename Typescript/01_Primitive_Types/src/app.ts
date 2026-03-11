// type number
const num1: number = 18.50
const num2: number = 32.50

const total: number = num1 + num2
console.log(total)

// type string 
const userName: string = 'fuzail ahmed'
console.log(userName)

// combine type
let id: number | string = '3030'
id = 88
console.log(id)

// type boolean
const isActive: boolean = false
console.log(isActive)

// type null 
const val: null = null
console.log(val)

// type undefine 
const val2: undefined = undefined
console.log(val2)

// type bigint
const bigNumber:bigint = 32323234323n
console.log(bigNumber)

// type symbol

const sym1:symbol = Symbol('abc')
const sym2:symbol = Symbol('abc')
console.log(sym1 == sym2)
