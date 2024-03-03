import gsap from "gsap"
let loader = document.getElementById("loader")

var t1 = gsap.timeline()
t1.from(loader + "p",{
    opacity: 0,
    duration: 1
})
t1.to(loader + "p",{
    scale: 2,
})
t1.to(loader + "p",{
    opacity:0,
    display:"none"
})