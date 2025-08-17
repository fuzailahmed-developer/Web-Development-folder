// // example - 1 
// // fetch("https://dummyjson.com/products").then((response) => {
// //   return response.json()
// // }).then((data) => {
// //   console.log(data.products);
// // })

// // short code 
// // fetch("https://dummyjson.com/products")
// // .then((response) => response.json())
// // .then((data) => console.log(data.products))



// //? Task 1:
// // https://dummyjson.com/users se data fetch karo aur console mein pehle 5 users ke names print karo.

// // fetch("https://dummyjson.com/products")
// // .then((response) => response.json())
// // .then((data) => {
// //   for(var i = 0; i < 5; i++){
// //     console.log(data.products[i]);
// //   }
// // })


// //? Task 2:
// // https://dummyjson.com/products se data fetch karo aur console mein sirf product titles aur unki prices dikhayo.

// fetch("https://dummyjson.com/products")
//   .then((response) => response.json())
//   .then((data) => {
//     for (const element of data.products) {
//       console.log(element.title);
//       console.log(element.price);
//     }
//   })


// //? post method

// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     category: 'Stationary'
//     /* other product data */
//   })
// })
//   .then(res => res.json())
//   .then((data) => console.log(data));



fetch("https://dummyjson.com/products?delay=3000") // 3000ms = 3 sec
.then((res) => {
 return res.json()
}).then(data => console.log(data))