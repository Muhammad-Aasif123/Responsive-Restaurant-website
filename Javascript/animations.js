gsap.registerPlugin(ScrollTrigger);
gsap.from(".food-type h2", {
  scrollTrigger:{
    trigger:".food-type h2",
    //toggleactions: "restart pause resume none"
    // start: "top center",
    //note these start are relative to the top 
    start: 400,
    scrub:true,
    markers: true

  },
  opacity: 0,


},)
gsap.from(".food-type p,li, .food-type button", {
    scrollTrigger:{
      trigger:".food-type p",
      //toggleactions: "restart pause resume none"
      // start: "top center",
      //note these start are relative to the top 
      start: 450,
      scrub:true,
      markers: true
    },
    opacity: 0,
  
  },)
  