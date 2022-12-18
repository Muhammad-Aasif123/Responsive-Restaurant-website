
 let nav = document.querySelector('.navigation-wrap');
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}
// document.getElementById('.navigation-wrap', addEventListener("scroll", function(){
//     if(document.documentElement.scrollTop > 20){
//         nav.classList.add("scroll-on");
//     }
//     else{
//         nav.classList.remove("scroll-on");
//     }
// }))
// gsap.from(".top-banner h1,p", {duration: 1, ease: "expo.inOut", y:-50})
// gsap.from(".top-banner button", {duration: 2, ease: "expo.inOut", y:-40})




