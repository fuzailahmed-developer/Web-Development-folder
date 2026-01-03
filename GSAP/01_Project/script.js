window.addEventListener('DOMContentLoaded',() => {
    gsap.fromTo('.hero-image img',{
        opacity : 0,
    },{
        opacity : 1,
        duration : 3 
    })
    
    gsap.from('header',{
        y : -200,
        duration : 1
    })

    gsap.from('h1',{
        y : 100,
        duration : 1,
        delay : 1,
        opacity : 0
    })
    gsap.from('.btn-primary',{
        y : 10,
        opacity : 0,
        duration : 2
    })
    gsap.from('.btn-outline',{
        y : 10,
        opacity : 0,
        duration : 2
    })
    gsap.from('.rating-card',{
        y : 10,
        opacity : 0,
        duration : 2
    })
})