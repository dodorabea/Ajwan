(function ($) {
  "use strict";
  /*====Dom is loaded==== */
  var $loader = document.querySelector('#preloader-background');
  
  window.onload = function() {
    setTimeout(function() {
      $loader.remove(); 
    }); 
  };
   /*==========Counter=========*/
   $(window).on('scroll', function () {
      $('.counting').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count'),
            hasAnimated = $this.data('animated'); // Check if animation has already run
    
        // Check if the element is in view
        if ($this.offset().top <= $(window).scrollTop() + $(window).height() && 
            $this.offset().top + $this.outerHeight() >= $(window).scrollTop()) {
          
          // Reset animation if it has already run
          if (hasAnimated) {
            $this.text('0');
            $this.data('animated', false);
          }
    
          // Start the counting animation
          $({ countNum: 0 }).animate({
            countNum: countTo
          }, {
            duration: 2000,
            easing: 'linear',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              $this.data('animated', true); // Mark as animated
            }
          });
        }
      });
    });
    
  /*====Back to top==== */
  // var amountScrolled = 200;
  // var amountScrolledNav = 25;

  // $(window).scroll(function () {
  //   if ($(window).scrollTop() > amountScrolled) {
  //     $('button.back-to-top').addClass('show');
  //   } else {
  //     $('button.back-to-top').removeClass('show');
  //   }
  // });

  // $('button.back-to-top').click(function () {
  //   $('html, body').animate({
  //     scrollTop: 0
  //   }, 800);
  //   return false;
  // });
  /*=====AOS animation=====*/
  AOS.init({
    // Global settings:
   //  duration: 900,
   //  easing: 'ease-in-cubic',
    disable: 'mobile',
  });
  AOS.refresh();
  /*=====swiper=====*/
  var swiperCertificates = new Swiper(".mySwiper.certificates", {
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
