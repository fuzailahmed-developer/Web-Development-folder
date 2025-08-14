// task - 1
let RandomNum = new Promise((resolve, reject) => {
    let generateNum = Math.ceil(Math.random() * 10)

    if (generateNum >= 5) resolve("Number is greater than 5")
    else reject("Number is less than or equal to 5")
})

RandomNum.then((data) => {
    console.log(data);
    console.log(RandomNum);
}).catch((data) => {
    console.log(data);
    console.log(RandomNum);
})

// task - 2

function loginUser(username, password) {
    let check = new Promise((resolve, reject) => {
        if (username.toLowerCase() == "fuzail" && password == "1234") resolve("Login successful")
        else reject("Invalid username or password")
    })
    return check
}
loginUser("fuzail", "1234").then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})

// task - 3

let userInput = document.querySelector("input")
let btn = document.querySelector("button")
btn.addEventListener("click", () => {

    let thenChaining = new Promise((resolve, reject) => {
        let value = userInput.value.trim()
        if (value != "") {
            resolve(value)
        }
        else {
            reject("String Rejected")
        }
    })
    thenChaining.then((data) => {
        return data.toUpperCase()
    }).then((data) => {
        return data.split("").reverse().join("")
    }).then((data) => {
        let createP = document.createElement("p")
        createP.textContent = data
        document.body.append(createP)
    }).catch((err) => {
        alert(err)
    })
})


// task - 4 

let task = new Promise((resolve, reject) => {
    console.log("Loading....");
    setTimeout(() => {
        resolve("Task Completed!")
    }, 3000)
})
task.then((data) => {
    console.log(data);
})


// 3 Promises
let p1 = new Promise((resolve) => {
    setTimeout(() => resolve("First Promise Resolved"), 1000);
});

let p2 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("Second Promise Resolved"), 2000);
});

let p3 = new Promise((resolve) => {
    setTimeout(() => resolve("Third Promise Resolved"), 3000);
});

// Promise.all
Promise.all([p1, p2, p3])
    .then((results) => {
        console.log("All Promises Resolved:", results);
    })
    .catch((error) => {
        console.log("One of the Promises Failed:", error);
    });
