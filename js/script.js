const swiper = new Swiper('.slider-main-block', {
    // Optional parameters
    loop: true,
  
    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-main-block__arrow.swiper-button-next',
      prevEl: '.slider-main-block__arrow.swiper-button-prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    autoplay: {
      delay: 6000,
    },
  });