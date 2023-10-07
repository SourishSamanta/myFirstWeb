gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        start: "top -40%",
        end: "top -100%",
        scrub: 2
    }

})
var crsr=document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x -70+"px"
    crsr.style.top = dets.y -70+"px"

})

let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); 
}


showSlides();

gsap.from("#top h1",{
    y:80,
    scrollTrigger:{
        trigger:"#top h1",
        scroller: "body",
        start: "top 50%",
        end: "top 70%",
        scrub: 2,

    }


})