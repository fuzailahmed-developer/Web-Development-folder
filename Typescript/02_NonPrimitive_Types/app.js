//! handling inputs with typescript
// const nameEl = document.getElementById('name') as HTMLInputElement | null;
// const emailEl = document.getElementById('email') as HTMLInputElement | null;
// const passwordEl = document.getElementById('password') as HTMLInputElement | null;
// const btn = document.querySelector('button');
// btn?.addEventListener('click', () => {
//     if (!nameEl?.value || !emailEl?.value || !passwordEl?.value) {
//         console.log('please fill all fields');
//         return;
//     }
//     const nameVal: string = nameEl.value;
//     const emailVal: string = emailEl.value;
//     const passwordVal: string = passwordEl.value;
//     console.log('Name:', nameVal);
//     console.log('Email:', emailVal);
//     console.log('Password:', passwordVal);
// });
//! array data type
// // number type
// const numbers: number[] = [1, 2, 3, 4]
// console.log(numbers)
// // string type
// const fruits: string[] = ['apple', 'mango', 'banana']
// console.log(fruits)
// // boolean type
// const flags: boolean[] = [false, true, false]
// // flags.push('ahmed') //* Not Allowed ❌
// // mixed type
// let mixed: (string | number)[] = [1, "hello", 2, "world"];
// console.log(mixed)
// // readonly type
// const nums: readonly number[] = [1, 2, 3];
// //* Array Using Array<type> Syntax
// const colors: Array<string> = ['red', 'blue', 'green']
// console.log(colors)
// let mixed2 : Array<string | number> = ['ali',1,'raza',2]
// console.log(mixed2)
// const num2: ReadonlyArray<number> = [1,3,3,3]
//! tuple
// difference between tuple and array
/*
tuple has fixed length and
specified type of each element
*/
// const person: [string, number] = ['fuzail', 24]
// console.log(person)
// // Tuple with Optional Elements
// let person2: [string, number?] = ["Ali"];
// console.log(person2)
// // function return value is tuple
// function getUser(): [string, number] {
//     return ["Ali", 30];
// }
// const [username, age] = getUser();
//! Object type
// inline object type
// const product: {
//     title: string
//     price: number
//     inStock: boolean
//     company? : string
// } = {
//     title: "Laptop",
//     price: 80000,
//     inStock: true
// };
// product.company = 'HBL'
// console.log(product)
// const user : {
//     readonly id : string
//     name : string
//     age : number
//     address : {
//         city : string
//         street : number | string
//     }
// } = {
//     id : '3232532',
//     name : 'ali',
//     age : 18,
//     address : {
//      city : 'karachi',
//      street : '#1'   
//     }
// }
// console.log(user)
// // array object
// const users : {
//     name : string
//     age : number
//     city : string
//     greet : () => void
// }[] = [
//     {
//         name : 'fuzail',
//         age : 18,
//         city : 'lahore',
//         greet : function () {
//             console.log(`Hello, ${this.name}`)
//         }
//     }
// ]
// console.log(users[0].greet())
//! any and unknown 
// let value: any = 10;
// console.log(value.toUpperCase()); // Runtime error
// let value1: unknown = 'ali'
// if (typeof value1 == 'string') {
//     console.log(value1.toUpperCase())
// }
//! function return type
// string
// const greetUser = (name: string): string => {
//     return `Hello, ${name}`
// }
// console.log(greetUser('fuzail'))
// void
// function logMessage(msg: string): void {
//     console.log(msg);
// }
// logMessage('Welcome Back!')
// never
// function throwError(msg: string): never {
//     throw new Error(msg);
// }
// throwError('something went wrong...!')
// object
// const getUser = (
//     name: string,
//     age: number,
//     city: string
// ): {
//     name: string,
//     age: number,
//     city: string,
//     area: string
// } => {
//     return {
//         name,
//         age,
//         city,
//         area: 'baldia'
//     }
// }
// console.log(getUser('fuzail', 18, 'lahore'))
