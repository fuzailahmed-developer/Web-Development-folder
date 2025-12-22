const userInfo:
    {
        name: string,
        age: number,
        salaryReceive: boolean
        off? : boolean
    } =
{
    name: "fuzail",
    age: 17,
    salaryReceive: false
}
userInfo.off = true

console.log(userInfo)


// union 

type user = {name : string, id : number}
type Admin = {username : string, id : number}

type userOrAdmin = user | Admin

const person: userOrAdmin = {username : "admin", id : 32}