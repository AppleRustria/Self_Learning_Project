let animate = gsap.timeline();

animate.from('.bg',{
    x:-1600,
    duration:1,
})

animate.from('.c1',{
    y:-500,
    duration:1,
})

animate.from('.c2',{
    y:1600,
    duration:1,
})

animate.from('.img',{
    x:-1600,
    duration:1,
})

animate.from('.sc',{
    x:1600,
    duration:1,
    opacity:0,
})

animate.from('h1',{
    x:-60,
    duration:.5,
    opacity:0,
})

animate.from('p',{
    x:-60,
    duration:.5,
    opacity:0,
})

animate.from('h2',{
    x:-58,
    duration:.5,
    opacity:0,
})