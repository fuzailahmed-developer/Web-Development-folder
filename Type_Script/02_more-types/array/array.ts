// 1
const fruits1: Array<string> = ["apple","mango","banana"];
// 2
const marks: number[] = [55,33,32,23,22];
// 3 
const students1 : readonly string[] = ["ali","raza","umer"];
// 4 
const students2 : ReadonlyArray<string> = ["ali","raza","umer"];
// 5 
const users: (string | boolean)[] = ["available",true,false,"notAvailable"]

//? tuple 

// fixed-length and define each element type define 
const multiTypes: [string,number,boolean] = ['string',3,true]