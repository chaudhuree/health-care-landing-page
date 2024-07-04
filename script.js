const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
});

$(document).ready(function () {
  // owl carousel

  // OWL CAROUSEL GENERAL JS
  var owlcar = $(".owl-carousel");
  if (owlcar.length) {
    owlcar.each(function () {
      var $owl = $(this);
      var itemsData = $owl.data("items");
      var autoPlayData = $owl.data("autoplay");
      var paginationData = $owl.data("pagination");
      var navigationData = $owl.data("navigation");
      var stopOnHoverData = $owl.data("stop-on-hover");
      var itemsDesktopData = $owl.data("items-desktop");
      var itemsDesktopSmallData = $owl.data("items-desktop-small");
      var itemsTabletData = $owl.data("items-tablet");
      var itemsTabletSmallData = $owl.data("items-tablet-small");
      $owl.owlCarousel({
        items: itemsData,
        margin: 10,
        padding: 10,
        pagination: paginationData,
        navigation: navigationData,
        autoPlay: autoPlayData,
        stopOnHover: stopOnHoverData,
        navigationText: ["<", ">"],
        itemsCustom: [
          [0, 1],
          [500, itemsTabletSmallData],
          [710, itemsTabletData],
          [992, itemsDesktopSmallData],
          [1199, itemsDesktopData],
        ],
      });
    });
  }
  // END OWL CAROUSEL GENERAL JS
});
