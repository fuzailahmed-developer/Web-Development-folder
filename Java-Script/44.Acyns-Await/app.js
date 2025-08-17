// async function noted 
/*

1. when you use async before function keyword it will auto matic convert in to async function and return promise

2.The async function is automatically filefield

3.for reject promise use throw keyword 

4.throw error de kr function end kr dega / throw new Error("error in program")

5. await keyword fetch ka result ku return krta ha or ager sirf fetch krta ha tu promise deta ha

*/

//! with then catch 
// async function makeRequest(){
//     fetch("https://dummyjson.com/products?delay=2000")
//     .then(res => res.json())
//     .then(data => console.log(data))

//     console.log("hiiii"); // ya pahla print huga 
// }

async function makeRequest(){
   let response = await fetch("https://dummyjson.com/products?delay=2000")
   let data = await response.json()
   console.log(data)
}