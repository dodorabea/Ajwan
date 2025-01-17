(function ($) {
  "use strict";
  /*====Dom is loaded==== */
  var $loader = document.querySelector('#preloader-background');
  
  window.onload = function() {
    setTimeout(function() {
      $loader.remove(); 
    }); 
  };
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
    duration: 900,
    easing: 'ease-in-cubic',
    disable: 'mobile',
  });
  AOS.refresh();
})(jQuery);