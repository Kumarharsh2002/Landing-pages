const canvas = document.querySelector('canvas');
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize",  function () {
    canvas.width = window.innerWidth;
    canvas.height =  
})









gsap.to("#page1",{
    scrollTogger:{
        trigger:`#page1`,
        start:`top top`,
       end: `bottom top`,
       markers: true,
       pin:true,
       scroller:"#main"
    }})

gsap.to("#page2",{
        scrollTogger:{
            trigger:`#page2`,
            start:`top top`,
           end: `bottom top`,
           markers: true,
           pin:true,
           scroller:"#main"
     }})

gsap.to("#page3",{
        scrollTogger:{
            trigger:`#page3`,
            start:`top top`,
           end: `bottom top`,
           markers: true,
           pin:true,
           scroller:"#main"
        }})