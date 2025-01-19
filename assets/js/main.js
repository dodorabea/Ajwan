(function ($) {
  "use strict";
  /* ========================================== 
      Loading
  ========================================== */
  var $loader = document.querySelector('#preloader-background');
  window.onload = function() {
    setTimeout(function() {
      $loader.remove(); 
    }); 
  };

  /*=====AOS animation=====*/
  AOS.init({
    // Global settings:
    duration: 900,
    easing: 'ease-in-cubic',
    disable: 'mobile',
  });
   AOS.refresh();

    /*=====Our certificates=====*/
  var swiperCertificates = new Swiper(".mySwiper.certificates-slider", {
    slidesPerView: 1.5,
     spaceBetween: 10,
     speed:18000,
     direction: 'horizontal',
     loop: true,
     autoplay: 
     {
       delay: 0,
     },
    freeMode: true,
    breakpoints: {
        0: {
            slidesPerView: 1.5,
        },
        400: {
            slidesPerView: 1.5,
        },
        880: {
            slidesPerView: 2.5,
        },
        1025: {
            slidesPerView: 2.5,
        },
        1366: {
            slidesPerView: 2.5,
        }
    }
  });



})(jQuery);
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const header = document.querySelector("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) { // Adjust scroll threshold as needed
     header.classList.add("scrolled");
  } else {
     header.classList.remove("scrolled");
  }
});
