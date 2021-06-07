
var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
      });
var swiper2 = new Swiper(".mySwiper2")
swiper.on('slideChange', ()=>{
  swiper2.slideTo(swiper.activeIndex)
  document.querySelector('.swiper-active-index').innerHTML=swiper.activeIndex+1
})
swiper2.on('slideChange', ()=>{
  swiper.slideTo(swiper2.activeIndex)
  document.querySelector('.swiper-active-index').innerHTML=swiper.activeIndex+1
})
