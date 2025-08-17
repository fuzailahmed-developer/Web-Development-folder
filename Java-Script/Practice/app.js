//! 1.Prefix and postfix
{
    let num = 8;
    let numResult = num + num + ++num + num++ + ++num;
    console.log(numResult);
}
//! 2.String concatenation
{
    let firstName = "fuzail";
    let lastName = "ahmed";
    // method - 1
    console.log(firstName + " " + lastName);
    // method - 2
    console.log(`${firstName} ${lastName}`);

    let str = "36"
    let num = 32;

    console.log(str - num); // minus karaga 
    console.log(str + num); // pluse nahi kara ga
}
//! 3.If Else - Else If - Nested If
{
    let age = 10
    if (age > 10 && age < 18) {
        console.log("Too Young!");
    }
    else {
        console.log("You Can Drive");
    }

    let num = 100;
    if (num > 0 && num < 50) {
        console.log("Low Balance");
    }
    else if (num >= 50 && num <= 100) {
        console.log("You Can Play");
    }
    else {
        console.log("Spacial Member");
    }

    let skills = ["html", "css", "bootstrap", "javascript"]
    let hasExperience = true

    if (skills.length > 3) {
        if (skills.includes("javascript")) {
            if (hasExperience) {
                console.log("Selected");
            }
        }
    } else console.log("Not Selected");
}
//! 4.Caparison and logical 
{
    console.log(5 > 5);
    console.log(5 < 5);
    console.log(5 == 5);
    console.log(5 === "5");
    console.log(!5);
    let str = ""
    console.log(str != "");
    let num = 6;
    console.log(num > 10 || num > 5);
    console.log(num > 10 && num < 20);
}
//! 5.Array Method
{
    let countries = [
        "Pakistan",
        "Canada",
        "Australia",
        "Brazil",
        "Germany",
        "Japan",
        "France",
        "South Africa",
        "India",
        "Turkey"
    ];

    let moreCountries = [
        "United States",
        "China",
        "Russia",
        "Italy",
        "Mexico",
        "Spain",
        "United Kingdom",
        "Argentina",
        "Egypt",
        "United States",
        "Indonesia",
        "United States"
    ];
    //! 1.find index
    console.log(moreCountries[3]);
    //! 2.update 
    moreCountries[3] = "fuzail"
    //! 3.Delete
    moreCountries.splice(3, 1)
    console.log(moreCountries);
    //! 4.length
    console.log(moreCountries.length);
    //! 5.last index of array
    console.log(moreCountries.at(-1));
    //! 6.index of and last index of
    console.log(moreCountries.indexOf("United States"));
    console.log(moreCountries.lastIndexOf("United States"));
    //! 7. push pop shift or unshift
    // add in last and remove in last
    moreCountries.push("Pakistan")
    moreCountries.pop()
    // add in start and remove in start
    moreCountries.unshift("India")
    moreCountries.shift()
    console.log(moreCountries);
    //! 8.Concat to array
    let concat = moreCountries.concat(countries)
    console.log(concat);
    //! 9.Includes
    moreCountries.includes("fuzail")
    //! 10.reverse 
    concat.reverse()
    console.log(concat);
    //! 11.sort A - Z
    console.log(concat.sort());
    let num = [1, 33, 33, 6, 1, 6, 7, 8, 10, 44, 25, 73, 123, 33];
    console.log(num.sort((a, b) => a - b));
    //! 12.Remove Duplicate
    let unique = [...new Set(num)]
    console.log(unique);

    //! 13.slice 
    let copyPart = countries.slice(5, 8)
    console.log(copyPart);

    //! 14.Splice
    copyPart.splice(1, 1, "Pakistan")
    console.log(copyPart);

    //! 15. split and join
    let str = "fuzail ahmed"
    console.log(str.split("")); // convert to array 

    let arr = ["fuzail", "ahmed"]; // convert to string
    console.log(arr.join(" "));
}
//! 6.Advance Array Method
{

    // noted : 
    // 0. forEach - only for print data - not work on htmlCollection - work on node list
    // 1. map isi value ku return krta ha ju return krta ha or wu new array return krta ha 
    // 2. find or filter - curr.name == "Shoes" - pura object reference return kr deta ha yani ager ap return value per kuch bi change kr ta hu tu wu real object per bi change hu gaha ga
    /* 3. some or every tab use krna ha jab ap ku data nahi chahiya bus meri condition match kr rahi ha ya nahi ya check krna ha
        some - if condition true - return and stop
        every - if condition false - return and stop
    */
    // 4. findindex  is most of use is remove element with splice

    console.log("********************");
    //? 1. forEach - only print 
    let arr = ["ali", "ahmed", "shayan", "muhammad", "raza", "fuzail", "ahmedAli", "Imran"];
    arr.forEach((curr, index) => {
        console.log(curr, index);
    })

    {
        //? 2. map - modify same array length
        // task - 1
        let numArr = [1, 2, 3, 4, 5];
        let modify = numArr.map((curr) => {
            return curr * 2
        })
        console.log(modify);

        // task - 2
        let ul = document.querySelector("ul");
        ul.innerHTML = arr.map((curr) => {
            return `<li>${curr}</li>`
        }).join("")

        // task - 3
        let prices = [100, 250, 999.99, 50];
        let changeFormat = prices.map((curr) => `$${curr}`)
        console.log(changeFormat);
        // Output: ["$100.00", "$250.00", "$999.99", "$50.00"]

        // task - 4
        let users = [
            { name: "Ali", age: 25 },
            { name: "Ahmed", age: 30 },
            { name: "Raza", age: 20 }
        ];
        // Output: ["Ali", "Ahmed", "Raza"]

        let onlyName = users.map((curr) => curr.name)
        console.log(onlyName);

        // task - 5
        let products = [
            { name: "Shirt", price: 1000 },
            { name: "Shoes", price: 3000 },
            { name: "Watch", price: 5000 }
        ];
        // Output: [{ name: "Shirt", price: 900 }, { name: "Shoes", price: 2700 }, ...]
        let discount = products.map((curr) => {
            return {
                name: curr.name,
                price: curr.price - (curr.price * 0.10)
            }
        })
        console.log(discount);

        // task - 6
        let blogs = [
            "How to Learn JavaScript Quickly",
            "10 CSS Tricks You Must Know",
            "Mastering React in 30 Days"
        ];
        // Output: ["How to Learn JavaScr", "10 CSS Tricks You Mus", "Mastering React in 3"]

        let short = blogs.map((curr) => {
            return curr.slice(0, 20)
        })
        console.log(short);

        // task - 7
        let companies = ["google", "facebook", "microsoft"];
        // Output: ["google.com", "facebook.com", "microsoft.com"]

        let addDomain = companies.map((curr) => {
            return `${curr}.com`
        })
        console.log(addDomain);
    }

    //? 3.find 
    let products = [
        { id: 1, name: "Shirt", price: 1000 },
        { id: 2, name: "Shoes", price: 3000 },
        { id: 3, name: "Watch", price: 5000 }
    ];
    // Find the product whose name is "Shoes"
    let findShoes = products.find((curr) => {
        return curr.name == "Shoes" // return object which is match
    })
    console.log(findShoes);

    //? 4.filter
    let users = [
        { name: "Sarah", active: true },
        { name: "John", active: false },
        { name: "Musa", active: true }
    ];
    // Filter only active users
    let filterActive = users.filter((curr) => {
        return curr.active
    })
    // filterActive[1].name = "Mrf" //! change in original object 
    console.log(filterActive);

    //? 5.some
    let cart = [
        { name: "Laptop", inStock: true },
        { name: "Headphones", inStock: true },
        { name: "Mouse", inStock: false },
        { name: "Keyboard", inStock: true }
    ];

    // Use .some() to check if any product is out of stock

    let checkOutOfStock = cart.some((curr, index) => {
        console.log(curr);
        return curr.inStock == false // jesa hi ya condition true hugi return kr de ga age check nahi kraga
    })
    console.log(checkOutOfStock);


    //? 6. Every 
    let students = [
        { name: "Ali", score: 72 },
        { name: "Sara", score: 85 },
        { name: "fuzail", score: 42 },
        { name: "Ahmed", score: 90 },
        { name: "Raza", score: 49 }
    ];

    // Use .every() to check if all students passed
    let checkPass = students.every((curr) => {
        console.log(curr);
        return curr.score > 50 // jesa hi condition false hu gi return kr dega or age check nahi kraga
    })
    console.log(checkPass);

    //? 7.findIndex
    let users1 = [
        { name: "Sarah", active: true },
        { name: "John", active: false },
        { name: "Musa", active: true }
    ];
    let removeJohn = users1.findIndex((curr) => curr.name == "John")
    users1.splice(removeJohn, 1)
    console.log(users1);

    //? 8.Reduce
    let cart1 = [
        { item: "Shirt", price: 1200, quantity: 2 },
        { item: "Jeans", price: 2500, quantity: 1 },
        { item: "Shoes", price: 3000, quantity: 1 }
    ];

    // Use .reduce() to get total price
    let total = cart1.reduce((iterator, curr) => {
        return iterator + curr.price
    }, 0)
    console.log(total);
}
//! 7.String Method
{
    console.log("********************");
    //1. find index two method

    let str1 = "hello"
    console.log(str1[1]);
    console.log(str1.at(-1)); // but get direct last index with -1

    // 2.Length
    console.log(str1.length);

    //? 3.WithOut Arguments Method

    // 1. to upper and lower case
    let str2 = "hello world";
    str2.toUpperCase()
    str2.toLowerCase()

    //2. trim - start - end

    let str3 = "   Hello World   ";
    console.log(str3.trim());
    console.log(str3.trimEnd());
    console.log(str3.trimStart());

    //? 4.With Arguments Method

    let myName = "Fuzail Ahmed";

    // 1. Search Method check capital == small (i)
    console.log(myName.search(/ahmed/i));

    // 2.Includes
    console.log(myName.includes("Ahmed"));

    // 3.IndexOf
    console.log(myName.indexOf("med"));

    // 4.Replace
    let replace = myName.replace("Ahmed", "Raza")
    console.log(replace);

    // 5.replaceAll
    let message = "The Quick Brown Fox Jumps Over The Lazy Dog";
    let repAll = message.replaceAll("The", "the")
    console.log(repAll);

    // 6.PadStart
    let num1 = "8888";
    console.log(num1.padStart(16, "*"));

    // 7.PadStart
    let num2 = "8888";
    console.log(num2.padEnd(16, "*"));

    // 8.CharCodeAt
    console.log("a".charCodeAt());
    console.log("z".charCodeAt());

    for (var i = 97; i <= 122; i++) {
        console.log(String.fromCharCode(i));
    }

    // 9.split convert in to array

    let text = "hello world";
    console.log(text.split(" "));


    // 10.slice 

    let userAli = "Muhammad Ali";
    let copyAli = userAli.slice(9)
    console.log(copyAli);

    // 11.repeat

    let repeatAli = copyAli.repeat(5).replaceAll("i", "i ").trimEnd().split(" ")
    console.log(repeatAli);

    // 12.startWith
    console.log("Hello World".startsWith("Hello")); // true

    // 13.endsWith
    console.log("Hello World".endsWith("World")); // true

    // 14.Match or matchAll

    let stringText = "The Quick Brown fox jumps over The Lazy dog";
    let copyText = stringText.match(/The/ig) // return in New array
    console.log(copyText);

    // i = casensitive 
    // g = globally 
}
//! 8.Math Method
{
    // negative to positive 
    console.log(Math.abs(-1));
    // round number
    console.log(Math.round(5.2));
    // ceil
    console.log(Math.ceil(5.2));
    // floor
    console.log(Math.floor(5.20000));
    // random
    console.log(Math.random().toFixed(2));
    // PI
    console.log(Math.PI);
    // sqrt
    console.log(Math.sqrt(81));
    // min and max
    let arr = [2, 5, 2, 6, 2, 1, 6, 78, 53, -1];
    console.log(Math.min(...arr));
    console.log(Math.max(...arr));

    let dice1 = Math.floor(Math.random() * 6) + 1
    console.log(dice1);
    let dice2 = Math.ceil(Math.random() * 6)
    console.log(dice2);
}
//! 9.Date Methods
{
    console.log("********************");

    let dateObj = new Date()
    console.log(dateObj.getDate());
    console.log(dateObj.getDay());
    console.log(dateObj.getFullYear());
    console.log(dateObj.getHours());
    console.log(dateObj.getMinutes());
    console.log(dateObj.getSeconds());
    console.log(dateObj.getMilliseconds());
    console.log(dateObj.getTime());

    console.log(dateObj.toDateString());
    console.log(dateObj.toLocaleDateString());

    console.log(dateObj.toTimeString());
    console.log(dateObj.toLocaleTimeString());


    let getMillisecondsCurr = dateObj.getTime()
    let dobMilliseconds = new Date("05/16/2008").getTime()

    let calculate = getMillisecondsCurr - dobMilliseconds
    let calculateDays = calculate / (1000 * 60 * 60 * 24) // weeks = 7 or months 30.44 duno ma sa koi aik use kr sakte ha aik time ma

    console.log(calculateDays);

}
//! 10.Loops
{
    //? for of 

    let students = ["Ali", "Sara", "Omer", "Fatima"];
    // Output:
    // Hello Ali!
    // Hello Sara!
    // Hello Omer!
    // Hello Fatima!
    for (const element of students) {
        console.log(`Hello ${element}`);
    }

    //? for in

    let product = { name: "Laptop", price: 80000, brand: "Dell" };
    // Output:
    // name: Laptop
    // price: 80000
    // brand: Dell

    for (const key in product) {
        console.log(`${key} : ${product[key]}`);
    }

    //? while loop

    let wallet = 1000;
    let count = 0;
    // Output:
    // Bought coffee 1
    // Bought coffee 2
    // Bought coffee 3
    // Bought coffee 4
    // Remaining money: 200

    while (wallet > 200) {
        wallet = wallet - 200
        count++
        console.log(`Bought coffee ${count}`);
    }
    console.log(`Remaining money: ${wallet}`);

    let arr = ["ali", "raza", "muhammad", "fuzail"];

    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
//! 11.Function
{
    let cart = [
        { name: "Shirt", price: 1000, quantity: 2 },
        { name: "Shoes", price: 3000, quantity: 1 },
        { name: "Watch", price: 2000, quantity: 1 }
    ];

    function calculateCartTotal(cart) {
        let grandTotal = 0;
        let discountApplied = 0;

        for (var i = 0; i < cart.length; i++) {
            grandTotal += cart[i].price
        }

        if (grandTotal > 5000) {
            discountApplied = grandTotal * 0.10
        }
        return `Total before discount: ${grandTotal}
Discount applied: ${discountApplied}
Final total: ${grandTotal - discountApplied}
`
    }
    const result = calculateCartTotal(cart)
    console.log(result);

    // task - 2 

    function orderCoffee(coffeeNames, wallet) {

        let initialWallet = wallet
        let coffeeCount = 0;
        const coffeeMenu = {
            latte: 350,
            espresso: 250,
            mocha: 400,
            cappuccino: 300
        };

        for (var i = 0; i < coffeeNames.length; i++) {
            let currCoffee = coffeeNames[i];
            if (wallet >= coffeeMenu[currCoffee]) {
                coffeeCount++
                wallet -= coffeeMenu[currCoffee]
                console.log(`Bought ${currCoffee}, remaining wallet: ${wallet}`);
            }
            else {
                console.log(`Not enough money for ${currCoffee}`);
            }
        }
        return {
            totalSpend: initialWallet - wallet,
            remainingWallet: wallet,
            coffeeCount: coffeeCount
        }
    }


    const program = orderCoffee(["latte", "mocha", "espresso"], 800);
    console.log(program);

}
//! 12.DOM
{

    console.log("********************");

    let getSpan = document.getElementById("first")
    let getAllSpanCollection = document.getElementsByTagName("span") // html collection
    let getHtmlCollectionWithClass = document.getElementsByClassName("we-are-span")// html collection


    let parent = document.getElementById("parentDiv")
    console.log(parent.firstElementChild);
    console.log(parent.lastElementChild);
    console.log(parent.firstElementChild.nextElementSibling);
    console.log(parent.firstElementChild.nextElementSibling.previousElementSibling);

    let querySelectorAndAll1 = document.querySelector("span"); // first one
    console.log(querySelectorAndAll1);
    let querySelectorAndAll2 = document.querySelectorAll("span"); // all node list collection
    console.log(querySelectorAndAll2);

    //! difference between node list and html collection is forEach is not work on htmlCollection 

    //? innertext or innerhtml and text content 

    let box = document.getElementById("box");

    console.log(box.innerHTML);
    // "<b>Hello</b> World <span style="display:none">Hidden</span>"

    console.log(box.innerText);
    // "Hello World"   (ignores hidden text)

    console.log(box.textContent);
    // "Hello WorldHidden" (includes hidden text)

    //? set has get remove attributes

    let box1 = document.querySelector(".box1 img")
    box1.setAttribute("height", "500px")
    console.log(box1.hasAttribute("height"));
    console.log(box1.getAttribute("height"));
    box1.removeAttribute("height")

    let box1Button = document.querySelector(".box1 button")
    box1Button.style.backgroundColor = "black"
    box1Button.style.color = "white"

    box1Button.addEventListener("click", () => {
        box1Button.classList.toggle("color")
    })
    let count = 0;
    let ctr = document.querySelector(".ctr button")
    let ctrUl = document.querySelector(".ctr ul")
    ctr.addEventListener("click", () => {
        count++
        let li = document.createElement("li")
        li.textContent = "my name is fuzail " + count
        ctrUl.append(li)
    })

}
//! 13.Events
{
    //? form event 
    {
        // real time input 
        document.querySelector(".input-box").addEventListener("input", (e) => {
            console.log(e.target.value);
        })
        // change when you click outside input
        document.querySelector(".input-box").addEventListener("change", (e) => {
            console.log(">>>>>>");
            console.log(e.target.value);
        })
        // focus when your input is focused
        let input = document.querySelector(".input-box input")
        input.addEventListener("focus", (e) => {
            console.log("input Focused!!");
            input.style.backgroundColor = "yellow"
        })

        // focus when your input is focused
        let input2 = document.querySelector(".input-box input")
        input.addEventListener("blur", (e) => {
            console.log("input blur!!");
            input.style.backgroundColor = "red"
        })

        // submit 

        let form = document.getElementById("myForm")
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            console.log(e.target.uname.value);
            console.log(e.target.upass.value);
        })
    }
    //? keyboard
    {
        let keyboard = document.querySelector(".keyboard input")
        keyboard.addEventListener("keydown", (e) => {
            console.log(e.key);
        })
        let keyboard1 = document.querySelector(".keyboard input")
        keyboard1.addEventListener("keyup", (e) => {
            console.log(e.key);
        })
    }
    //? mouse
    {

        // const mouseBoxP = document.querySelector(".mouse-box")
        // mouseBoxP.addEventListener("click",(e) => {
        //     console.log("Parent Clicked");
        // })
        // const mouseBoxC = document.querySelector(".mouse-box .child")
        // mouseBoxC.addEventListener("click",(e) => {
        //     console.log(mouseBoxC);
        //     e.stopPropagation() // stop event bubbling
        // })

        const mouseBoxP = document.querySelector(".mouse-box")
        mouseBoxP.addEventListener("dblclick", () => {
            mouseBoxP.style.backgroundColor = "yellow"
        })
        const mouseBoxC = document.querySelector(".mouse-box .child")
        mouseBoxP.addEventListener("mousedown", () => {
            mouseBoxC.style.backgroundColor = "orange"
        })
        mouseBoxP.addEventListener("mouseup", () => {
            mouseBoxC.style.backgroundColor = "purple"
        })
        mouseBoxP.addEventListener("mouseenter", () => {
            mouseBoxC.style.borderRadius = "50%"
        })
        mouseBoxC.addEventListener("mouseover", () => {
            mouseBoxP.style.borderRadius = "50%"
        })
        mouseBoxC.addEventListener("mouseout", () => {
            mouseBoxP.style.borderRadius = "0%"
        })
        mouseBoxP.addEventListener("mouseleave", () => {
            mouseBoxC.style.borderRadius = "unset"
        })
    }
}
//! 14.Switch
{
    let orderSystem = (userOrder) => {
        switch (userOrder) {
            case "burger":
                return userOrder
                break;
            case "coffee":
                return userOrder
                break;
            case "pizza":
                return userOrder
                break;

            default:
                return `${userOrder} is not available!`
                break;
        }
    }
    console.log(orderSystem("pizza"));
    console.log(orderSystem("sadwish"));
}
//! 15.Try-Catch
{
    function safeDivide(a, b) {
        try {
            if (b == 0) throw new Error("Division by zero is not allowed");
            return a / b
        } catch (error) {
            return error

        }
    }

    let result = safeDivide(0, 2);
    console.log(result)
}
//! 16.Spread and Rest
{

    function placeOrder(customerName, ...items) {
        let baseMenu = ["Margherita", "Pepperoni", "Veggie"];
        let newMenu = [...baseMenu, "BBQ Chicken", "Cheese Burst"];

        let orderedItems = [];

        for (let i = 0; i < items.length; i++) {
            if (newMenu.includes(items[i])) {
                orderedItems.push(items[i]);
            }
        }

        return {
            customer: customerName,
            itemsOrdered: orderedItems,
            totalItems: orderedItems.length
        };
    }

    const userDetails = placeOrder("Ali", "Margherita", "BBQ Chicken", "Veggie3");
    console.log(userDetails);

}
//! 17.Object
{
    let person = {
        name: "Ali",
        age: 25,
        city: "Karachi",
        zipCode: 33333
    };
    // //? 1 - recommended
    // console.log(person["first-Name"]?.Date);
    // //? 2 - dot
    // console.log(user2.age);

    //? update 
    person.age = 32
    console.log(person);

    //? delete

    delete person.zipCode
    console.log(person);

    //! Object.freeze and seal 

    // seal update existing value but not add and remove 
    const yourObject = {
        name: "Ali",
        age: 25,
        city: "Lahore",
        job: "Developer"
    };

    Object.seal(yourObject);
    // not add 
    yourObject.mouse = "nvda";
    //but update
    yourObject.city = "Karachi"

    console.log(yourObject);

    //! freeze not add not update and not delete 

    const yourObject2 = {
        name: "Ali",
        age: 25,
        city: "Lahore",
        job: "Developer"
    };

    Object.freeze(yourObject2);
    // not add 
    yourObject2.mouse = "nvda";
    // not update
    yourObject2.city = "Islamabad"
    console.log(yourObject2);



    //! print object

    //? 1.
    let person1 = {
        name: "Ali",
        age: 25,
        isStudent: true
    };

    for (const key in person1) {
        console.log(key, " : ", person1[key]);
    }
}
//! 18.Shallow and Deep Copy
{
    let userdata = {
        firstName: "Muhammad",
        lastName: "Amir",
        Age: 18,
        city: "Karachi"
    }
    console.log(userdata);

    //! wrong Method 

    // let copyData = userdata
    // copyData.Edu = "Matric"

    //! Shallow Copy Method correct way to copy object and array

    // Noted : Sallow copy problem in nested array or objects

    //? 1. 
    // let copyData = {};
    // Object.assign(copyData,userdata)
    // copyData.postalCode = "75760"

    //? 2. easy method 
    // let copyData = {...userdata}
    // copyData.postalCode = "75760"


    //! Deep Copy -- For Nested Object and Array Copy

    let person = {
        name: "Ahmed",
        age: 30,
        address: {
            city: "Karachi",
            zip: 74000
        },
        contact: {
            phone: "03123456789",
            email: "ahmed@example.com"
        }
    };

    let copyPerson = JSON.parse(JSON.stringify(person))
    copyPerson.address.zip = 888323;
}
//! 19.Optional Chaining and Destructure
{
    // array destructure
    let arr = ["apple", "mango", "banana"];
    let [apple, ...allFruits] = arr
    console.log(apple);
    console.log(allFruits);
    // object destructure
    let person = {
        name: "ali",
        age: 32,
        city: "karachi"
    }
    let { city } = person
    console.log(city);

    // optional chaining
    let person1 = {
        name: "Ahmed",
        age: 30,
        address: {
            city: "Karachi",
            zip: 74000
        },
        contact: {
            phone: "03123456789",
            email: "ahmed@example.com"
        }
    };

    // console.log(person1?.email?.zip);
    // ager person ha tu => email check kro => ager email ha tu zip check kro => ager nahi ha tu error na du undefine return kro

    console.log("********");
}
//! 20.SetInterval or SetTimeOut
// {

//     console.log("Hello 1");

//     console.log("Hello 2");

//     setTimeout(() => {
//         console.log("Hello 3");
//     },1000)

//     console.log("hello 4");

//     setTimeout(() => {
//         console.log("Hello 5");
//     },900)


//     let count = 0; 

//     let timer = setInterval(() => {
//        count++ 
//        console.log(count);
//        if (count == 5) {
//         console.log("Interval Stop!!");
//         clearInterval(timer)
//        }
//     }, 1000);


// }
//! 21.Higher-Order-Closure-CallBack_Function
{
    //? callBack-Fucntion
    // {
    //     function processOrder(orderId, callback) {
    //         console.log("Processing order...");
    //         setTimeout(() => {
    //             console.log(`Order ${orderId} completed`);
    //             callback("Sending email confirmation")
    //         }, 2000);
    //     }
    //     function conformation(ms) {
    //         setTimeout(() => {
    //             console.log(ms);
    //         }, 1000);
    //     }
    //     processOrder(101, conformation)
    // }



    function placeOrder(customerName, cb, ...items) {

        let ordered = []
        let notAvailable = []
        let countOutOfStock = 0;
        let total = 0
        let products = {
            shirt: { price: 1000, stock: 5 },
            shoes: { price: 3000, stock: 2 },
            watch: { price: 2000, stock: 0 }
        };

        for (var i = 0; i < items.length; i++) {
            if (products[items[i]]?.stock > 0) {
                ordered.push(items[i])
                total += products[items[i]]?.price
            }
            else if (products[items[i]]?.stock == 0) countOutOfStock++
            else notAvailable.push(items[i])
        }

        let discount = total * 0.10
        console.log(discount);

        return {
            Customer: customerName,
            Ordered: ordered.join(),
            NotAvailable: notAvailable.join(),
            OfStock: countOutOfStock,
            "Total before discount": total,
            Discount: discount,
            FinalTotal: total - discount,
            confirmation: cb(customerName)
        }
    }
    function orderConformation(cusName) {
        return `Sending email confirmation to ${cusName}`
    }
    let result = placeOrder("Ali", orderConformation, "shirt", "shoes", "mobile", "watch", "apple");
    console.log(result);

}
//! 22.New Map
{
    let map1 = new Map()

    map1.set("str", "fuzail")
    map1.set("null", null)
    map1.set("() => {}", () => "hello")

    console.log(map1.get("str"));
    console.log(map1.has("str"));
    console.log(map1.delete("null"));
    console.log(map1.size);
    console.log(map1.keys());
    console.log(map1.values());

    for (const [key, value] of map1) {
        console.log(key + " : " + value);
    }
}
//! 23.OOP
{
    //? piller : 1 - Object

    // noted : this keyword not work in arrow function 

    let obj = {
        name: "ali",
        age: 12,
        greet() {
            console.log(`Hello ${this.name}`);
        },
        showMessage() {
            console.log(`${this.name} age is ${this.age}`);
        }
    }
    obj.greet()
    obj.showMessage()

    //? piller : 2 - Class

    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
        }
        getBirthYear() {
            return new Date().getFullYear() - this.age
        }
    }

    let person1 = new Person("fuzail", "ahmed", 18);
    console.log(person1.getBirthYear());


    //? piller no : 3 inheritance...!

    class Intro {
        constructor(realName) {
            this.name = realName
        }
        showName() {
            return `my real name is ${this.name}`
        }
    }


    class Fuzail extends Intro {
        constructor(name) {
            super(name)
        }
    }

    let s1 = new Fuzail("ali");
    s1.showName() // parent function
    console.log(s1);


    //! task 

    class StdName {
        constructor(name) {
            this.name = name
        }
        speak() {
            return `Hello, my name is ${this.name}`
        }
    }


    class StdRes extends StdName {
        constructor(uName, grade) {
            super(uName);
            this.grade = grade
        }
        result() {
            return `${this.name} is in grade ${this.grade}`
        }
    }


    let student1 = new StdRes("Ali", 10)
    console.log(student1.result());
    console.log(student1.speak());

    //? piller - 4  Polymorphism

    class Animals {
        speak() {
            console.log("Animals Are Talking!");
        }
    }
    class Human extends Animals {
        speak() {
            console.log("Human are Talking with each other!");
        }
    }

    let Animals1 = new Animals()
    Animals1.speak()

    let Human1 = new Human()
    Human1.speak()

    //? piller - 5 abstraction and Encapsulation 
    
    class BankAccount {
        #balance = 0; // private property

        deposit(amount) {
            if (amount > 0) this.#balance += amount;
        }

        getBalance() {
            return this.#balance;
        }
    }

    let acc = new BankAccount();
    acc.deposit(500);
    console.log(acc.getBalance()); // 500
    // console.log(acc.#balance); ❌ Error - direct access not allowed

}
