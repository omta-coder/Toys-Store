var tl = gsap.timeline();

tl.from("#nav-top,#nav-top h4, #nav-top-part2",{
    y:-50,
})
tl.from("#nav-bottom",{
    x:-900,
    // duration:2,
    opacity:0
})
tl.from("#nav-bottom img",{
    x:-100,
    opacity:0
})
tl.from("#nav-bottom-right ",{
    x:100,
    opacity:0
})
tl.from("#nav-bottom-center",{
    scale:0,
    opacity:0,
})

tl.from("#page1-main-left h1,#page1-main-left button",{
    x:-100,
    opacity:0,
    stagger:.2,
})
tl.from("#page1-main-right img",{
    opacity:0,
    scale:0,
})

var tl = gsap.timeline()
tl.to(".slidbar",{
    top:0
})
tl.from(".slidbar h5",{
    y:60,
    stagger: .3,
    opacity:0
})
tl.pause()
let menu = document.querySelector(".menu")
let cross = document.querySelector("#cross")
let slidbar = document.querySelector(".slidbar")

menu.addEventListener("click",()=>{
    slidbar.style.display="initial"
   
    tl.play()
    
})
cross.addEventListener("click", () => {
    tl.reverse()
})

gsap.from("#page2 h3",{
    opacity:0,
    x:'50%',
    stagger:.3,
    scrollTrigger:{
        trigger:"#page2 h3",
        scroller:"body",
        scrub:true,
    }
})

gsap.to("#page2 #slider #box",{
    transform: "translateX(-450%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -120%",
        scrub:2,
        pin:true

    }
})
gsap.from("#page3 h1",{
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
        scrub:true,
    }
})

gsap.from("#page3 .page3-content-box",{
    opacity:0,
    x:80,
    stagger:.5,
    scrollTrigger:{
        trigger:"#page3 .page3-content-box",
        scroller:"body",
        scrub:true,
    }
})

gsap.from("#page4 h1",{
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        scrub:true,
    }
})

var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    loop:true,
  });

  gsap.from("#page4 .swiper-slide",{
    opacity:0,
    x:80,
    rotate:90,
    stagger:.9,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        scrub:true,
        pin:true
    }
})

gsap.from("#page5 h1",{
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:"#page5 h1",
        scroller:"body",
        scrub:true,
    }
})
