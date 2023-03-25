const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  direction: "horizontal",
  loop: false,
  breakpoints: {
    768: {
      enabled: false,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
