let map1 = new Map()
map1.set("name","fuzail")
map1.set("age",18);
map1.set(1,"close")
map1.set(10,"open")
map1.set("arr",["apple","mango","banana"])
map1.set("() => {}",function(){"hello world"})
map1.set("{}",{"fruits1" : "apple","new" : "banana"})

console.log(map1.get("() => {}"));
console.log(map1.get("{}"));

//! check available or not 
console.log(map1.has("age"));

//! check length 
console.log(map1.size);

//! delete 

map1.delete(10)
console.log(map1);

//! all keys

// let keys = map1.keys()
// for (const element of keys) {
//     console.log(element);
// }

//! all values 

// let values = map1.values()
// for (const element of values) {
//     console.log(element);
// }

//! short

for (const [keys,value] of map1) {
    console.log(keys,":",value);
}