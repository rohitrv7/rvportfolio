function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco();

function cursor(){
let homepage = document.querySelector("#home-page");
let cursor = document.querySelector("#home-page .cursor");

homepage.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        scale:1,
        opacity: 1
    })
})
homepage.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        scale:.98,
        opacity: 0
    })
})
homepage.addEventListener("mousemove",(e)=>{
    gsap.to(cursor,{
        top: e.y,
        left: e.x
    })
})
}
cursor();


gsap.from("#home-page h4",{
    scale:.8,
    opacity:0,
    delay:.2,
    duration:.8,
    stagger:.2
})
gsap.from("#home-page h1",{
    y:100,
    opacity:0,
    delay:.5,
    duration:.8,
    stagger:.2
})
gsap.from("#home-page .fst",{
    x:-100,
    opacity:0,
    delay:.8,
    duration:.7,
})
gsap.from("#home-page .sec",{
    x:100,
    opacity:0,
    delay:.8,
    duration:.7,
})

gsap.to("#about-page .heading h1",{
    y:-100,
    opacity:0,
    scrollTrigger:{
        trigger:"#about-page",
        scroller:"#main",
        start:"top 100%",
        end:"top -200%",
        scrub:3
    }
})
gsap.from(".about-content .aboutborder .card",{
    x:-100,
    scrollTrigger:{
        trigger:"#about-page",
        scroller:"#main",
        start:"top 400%",
        end:"top -200%",
        scrub:3
    }
})
gsap.from(".about-content .aboutborder .cardimg",{
    x:200,
    duration:.2,
    scrollTrigger:{
        trigger:"#about-page",
        scroller:"#main",
        start:"top 400%",
        end:"top -200%",
        scrub:3
    }
})

gsap.to(".skill-page .heading h1",{
    y:-100,
    opacity:0,
    scrollTrigger:{
        trigger:".skill-page",
        scroller:"#main",
        start:"top 100%",
        end:"top -200%",
        scrub:3
    }
})
gsap.to(".skills .skillcard .card,.skills h2",{
    y:-50,
    opacity:0,
    duration:.7,
    delay:.3,
    stagger:.2,
    scrollTrigger:{
        trigger:".skill-page",
        scroller:"#main",
        start:"top 15%",
        end:"top -150%",
        scrub:3,
        pin:true
    }
})

gsap.to(".project-page .heading h1",{
    y:-100,
    opacity:0,
    scrollTrigger:{
        trigger:".project-page",
        scroller:"#main",
        start:"top 100%",
        end:"top -200%",
        scrub:3
    }
})
gsap.from(".projectcards .card",{
    x:-10,
    stagger:.2,
    scrollTrigger:{
        trigger:".project-page",
        scroller:"#main",
        start:"top 100%",
        end:"top -400%",
        scrub:3,
    }
})


gsap.from(".thanks h2",{
    scale:.8,
    duration:1,
    delay:.5,
    scrollTrigger:{
        trigger:".thanks",
        scroller:"#main",
        start:"top 100%",
        end:"top -200%",
        scrub:3
    }
})