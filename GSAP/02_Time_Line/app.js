
// time line example

// let gsapTimeLine = gsap.timeline()
// window.addEventListener('DOMContentLoaded',() => {
//     gsapTimeLine.to(".circle",{
//         x : 500,
//         duration : 3
//     }).to(".square",{
//         x : 500,
//         duration : 3,
//         rotation : 360
//     }).to(".doted-circle",{
//         x : 500,
//         duration : 3,
//         rotation : 360
//     })
// })

let btns = document.querySelector('.btn-container')
window.addEventListener('DOMContentLoaded',() => {

    let animation = gsap.to('.circle',{
        x : 500,
        duration : 3,
        paused : true
    })

    btns.children[0].addEventListener('click',() => {
        animation.play()
    })
    btns.children[1].addEventListener('click',() => {
        animation.pause()
    })
    btns.children[2].addEventListener('click',() => {
        animation.resume()
    })
    btns.children[3].addEventListener('click',() => {
        animation.reverse()
    })
    btns.children[3].addEventListener('click',() => {
        animation.restart()
    })
})