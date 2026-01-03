//! example - 1 ( to - end point ) 

// window.addEventListener('DOMContentLoaded', () => {
//     gsap.to('#boy', {
//         left: '10%',
//         duration: 3
//     })
// })


//! example - 2 (from - starting point)

// window.addEventListener('DOMContentLoaded', () => {
//   gsap.from('#boy', {
//     top: '10%',
//     left: '60%',
//     duration: 3
//   });
// });



window.addEventListener('DOMContentLoaded',() => {
    gsap.fromTo('#boy',{
        top : '10%',
        left : '60%'
    },{
        top : '70%',
        left : '65%',
        duration : 3
    })
})