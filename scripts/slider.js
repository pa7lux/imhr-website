export function runSwiper(className) {
  const swiper = new Swiper(className, {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    spaceBetween: 8,
    

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
