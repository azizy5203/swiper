import "./style.scss";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-cube";
import "swiper/bundle";

import "bootstrap-icons/font/bootstrap-icons.scss";

const swiper = new Swiper(".swiper", {
  speed: 300,
  spaceBetween: 0,
  allowTouchMove: true,
  // direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 39,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // cardsEffect: {
  //   slideShadows: false,
  // },
  // effect: "cube",
  // cubeEffect: {
  //   shadow: false,
  //   slideShadows: false,
  //   shadowOffset: 0,
  //   shadowScale: 0,
  // },
  modules: [Navigation, Pagination],
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-btn--next",
    prevEl: ".swiper-btn--prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  // createElements: true,
});

const next = document.querySelector(".swiper-btn--next");
const prev = document.querySelector(".swiper-btn--prev");

// next.addEventListener("click", () => {
//   swiper.slideNext();
// });
// prev.addEventListener("click", () => {
//   swiper.slideNext();
// });
