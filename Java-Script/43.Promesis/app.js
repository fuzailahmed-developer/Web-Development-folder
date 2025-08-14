// noted : promise state 
// pending
// resolved
// rejected

{
    //? resolved
    // let promises = new Promise((resolved, reject) => {
    //     resolved("fuzail")
    // })
    // console.log(promises);

    // [[Prototype]]: Promise
    // [[PromiseState]]: "fulfilled"
    // [[PromiseResult]]:"fuzail"
}
{
    //? rejected

    // let promises1 = new Promise((resolved, reject) => {
    //     reject("Promise Reject")
    // })
    // console.log(promises1);

    // [[Prototype]]: Promise
    // [[PromiseState]]: "rejected"
    // [[PromiseResult]]:"Promise Reject"
}

let resolvedBtn = document.querySelector(".container").firstElementChild
let rejectBtn = document.querySelector(".container").lastElementChild

const myPromise = new Promise((resolved,reject) => {
    resolvedBtn.addEventListener("click",() => {
        resolved("Promise is Resolved")
    })  
    rejectBtn.addEventListener("click",() => {
        reject("Promise is Reject")
    })
})


const thenReturn = myPromise.then((data) => {
    console.log(data);
    return "fuzail"
}).then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})

console.log(thenReturn);


let user = new Promise( (resolve,reject) => {
    setTimeout(() => {
        resolve("Resolve")
        console.log(user);
    }, 1000);
})
console.log(user);

