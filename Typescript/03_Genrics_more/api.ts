type UserType = {
    id : string
    name : string
    email : string
    [key:string]:string
}


async function fetchData():Promise<UserType[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data:UserType[] = await res.json()
    return data.map((user) => ({
        id : user.id,
        name : user.name,
        email : user.email,
        username : user.username
    }))
}


fetchData().then((res) => console.log(res))