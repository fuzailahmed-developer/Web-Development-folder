// const user = {
//   userId: 1,
//   id: 1,
//   title: 'delectus aut autem',
//   completed: false,
// };

//? noted : JSON file
/* 
all keys in double quotes
last key do not have any quoma ,
*/

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

let btn = document.querySelector('button');
let img = document.querySelector('img');
btn.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((json) => {
        img.src = json.message 
    });
});
