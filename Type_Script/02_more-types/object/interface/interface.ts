interface user extends moreDetails{
    name : string,
    age : number,
    class : string
}

interface moreDetails {
    feesPay :  boolean
}

const user1 : user = {
    name : "ali",
    age : 17,
    class : "5th",
    feesPay : false
}

// combine two types 

type personAT = {
    name : string
}
type personBT = {
    age : number
}
type personCT = personAT & personBT

const personA: personAT = {name : "ali"}
const personB:personBT = {age : 8}
const personC: personCT = {age : 8,name : "ahmed"}