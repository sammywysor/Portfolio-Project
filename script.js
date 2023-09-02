//smooth scrolling   //locomotive js
        //attaching loco scroll css
        //attaching locomotive scroll min js 
        //some code from loco github js 
//Gsap
    //attaching gsap in script 
//ScrollTrigger

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let xprev = 0;
let yprev = 0;

window.addEventListener("mousemove", function(details) {
    let xscale = gsap.utils.clamp(0.8, 1.2, details.clientX - xprev);
    let yscale = gsap.utils.clamp(0.8, 1.2, details.clientY - yprev);

    // Moving the circle together with the mouse instantly
    document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale}, ${yscale})`;

    xprev = details.clientX;
    yprev = details.clientY;
});

function firstPageAnim() {
    var timeLine = gsap.timeline();

    timeLine
        .from("nav", {
            y: '-10',
            opacity: 0,
            ease: "Expo.easeInOut",
            duration: 1.5
        })
        .to(".boundingelem", {
            y: '0',
            ease: "Expo.easeInOut",
            duration: 2,
            stagger: .2,
            delay: -1
        })
        .from("#herofooter", {
            y: '-10',
            opacity: 0,
            ease: "Expo.easeInOut",
            duration: 1.5,
            delay: -1
        });
}

firstPageAnim();


document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll(".elem").forEach(function (elem) {
        var rotate = 0;
        var diffrot = 0;
    
        elem.addEventListener("mouseleave", function (dets) {
            gsap.to(elem.querySelector("img"), {
                opacity: 0,
                ease: "power3",  
                duration: 0.5,
     
            });
        });
    
        elem.addEventListener("mousemove", function (dets) {
            var diff = dets.clientY - elem.getBoundingClientRect().top;
            diffrot = dets.clientX - rotate;
            rotate = dets.clientX;
            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                ease: "power3",  
                top: diff,
                left: dets.clientX,
                rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
                
            });
        });
    });
});

function updateTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm + ' EST';
    document.getElementById('liveTime').textContent = strTime;
}

updateTime();
setInterval(updateTime, 1000);

