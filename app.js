var typed = new Typed('#element', {
  strings: ['<i>Frontend </i>Developer.', '<i>Web </i>Designer.', '<i>Graphics </i>Designer.', '<i>Tech </i>Creator.'],
  typeSpeed: 80,
  loop: true,
  loopCount: Infinity,
});


var swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

