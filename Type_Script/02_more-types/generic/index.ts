function identity<T,Y>(arg1: T, arg2: Y): T {
    return arg1;
}
let output1 = identity<string,number>("myString",3); // output1 is of type string


function userCollection<T> (data : T[]) : T {
    return data[0]
}
userCollection(["ali","raza","ahmed"])