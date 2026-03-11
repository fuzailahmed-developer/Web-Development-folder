interface User {
    readonly id: string
    name: string
    email: string
    password: string
    age?: string | number
    greet(): void
}


const u1: User = {
    id: '123',
    name: 'ali raza',
    email: 'ali@gmail.com',
    password: 'ali123',
    greet: () => {
        console.log('hello World')
    }
}


interface Product {
    id: number
    name: string
}

const products: Product[] = [
    { id: 1, name: "Phone" },
    { id: 2, name: "Laptop" }
]


interface addFunction {
    (a: number, b: number): number
}


const add: addFunction = (a, b) => {
    return a + b
}

add(1, 5)


interface Person {
    name: string
}

interface Employee extends Person {
    salary: string | number
}

const e1: Employee = {
    name: 'uzair',
    salary: 25000
}

//! intersection

type A1 = {
    name: string
}

type A2 = {
    age: number
}

type A3 = A1 & A2

const a1: A1 = {
    name: 'umer',
}

const a2: A2 = {
    age: 18
}

const a3: A3 = {
    name: 'usman',
    age: 18
}

console.log(a3)


interface User1 {
  name: string
}

interface Admin {
  role: string
}

type AdminUser = User1 & Admin

const admin: AdminUser = {
  name: "Ali",
  role: "Super Admin"
}

enum Direction {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right'
}


const selectedDirection : Direction = Direction.Down
console.log(selectedDirection)


