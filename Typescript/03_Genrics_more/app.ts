//! generic

// function fruit<T>(name:T):T{
//     return name
// }

// const f1 = fruit<string>('apple')
// const fn = fruit<number>(333)

//! generic with array

// const getFirstItem = <T>(arr: T[]):T => {
//     return arr[0]
// }

// getFirstItem<number>([1,2,3,4])
// getFirstItem<string>(['A','B','C'])


//! Generic Interface

// interface ApiResponse<TD,TS>{
//     data : TD
//     status : TS
// }

// const a1: ApiResponse<string,number> = {
//     data : 'User Fetched',
//     status : 300
// }


// type User = {
//   name: string
//   age: number
//   email: string
// }

// type UserKeys = keyof User

// const userKey:UserKeys = 'name'


//! index signature

// type User = {
//     name : string
//     age : number
//     [key:string]:string | number
// }

// const u1:User={
//     name : 'ahmed',
//     age : 18,
//     city : 'karachi'
// }


//! utility class 
//? 1.Partial optional all properties

interface Person {
    name: string
    age: number
    city?: string
}

const p1: Partial<Person> = {

}

//? 2.required all property

const p2: Required<Person> = {
    name: 'ahmed',
    age: 18,
    city: 'islamabad'
}

//? 3.Readonly all property

const p3: Readonly<Person> = {
    name: 'ali',
    age: 18
}

// p3.name = 'ahmed' // not allow ❌

//? 4.pick properties

const p4: Pick<Person, 'age' | 'city'> = {
    age: 18,
    city: 'multan'
}

//? 5.omit remove properties 

const p5: Omit<Person, 'city'> = {
    name: 'kohli',
    age: 99
}

//? 6. exclude
type Roles = "admin" | "user" | "guest"
type AllowedRoles = Exclude<Roles, "guest">

let role:AllowedRoles
role = 'admin'
role = 'user'

//? 7. extract
type Roles2 = "admin" | "user" | "guest"
type AllowedRoles2 = Extract<Roles2, "admin"|'guest'>

let role2:AllowedRoles2
role2='admin'
role2='guest'

//? 8.NonNullable remove falsy values from types
type MyType = string | null | undefined | number
type NewType = NonNullable<MyType>

const newValue:NewType = 333