gsap.from("#box1", {
    x: 1300,
    opacity: 0,
    delay: 1,
    duration: 1.5,
    rotate: 360,
    scale: 0.4,
    repeat: -1,
    yoyo: true,
    backgroundColor: "blue",
    borderRadius: "50%",
    y: 530,
});

gsap.from("#box2", {
    x: 1400,
    y: -550,
    opacity: 0,
    delay: 3,
    duration: 1.5,
    rotate: 360,
    scale: 0.4,
    repeat: -1,
    yoyo: true,
    backgroundColor: "purple",
    borderRadius: "50%",
});

gsap.from("#header #title", {
    y: 60,
    duration: 1.5,
    delay: 0.2,
    opacity: 0,
    ease: "power2.inOut",
});


gsap.from(" #about1", {
    y: 50,
    stagger:0.2,
    duration:1,
    delay: 1,
    opacity: 0,
    scale:1.2,
    ease: "power3.inOut",
});

gsap.from(".page2 #box3", {
    rotate: 765,
    scale:1.1,
    borderRadius: "5%",
    backgroundColor: "blue",
    scrollTrigger: {
        scrub:1,
        scroller: "body",
        trigger: "#box3",
        start: "top 50%",
    }
});

gsap.from("#text2", {
    opacity: 0,
    scale:1.2,
    x: -50,
    scrollTrigger: {
        scrub:2,
        scroller: "body",
        trigger: "#text2",
        start: "top 80%",
    }
});


gsap.to("#text3 h1 ", {
    transform:"translateX(-350%)",
    
    scrollTrigger:{
        
        trigger:".page3 ",
        scroller:"body",
        start: "top 0%",
        end:"top -100%",
        scrub:1,
        pin:true,
    }
});
