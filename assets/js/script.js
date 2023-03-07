'use strict';

$(function () {
 /* Typing animation  */
 $('#headingTyping').typed({
  strings: ['Amjesh Singh', 'a Developer', 'a Designer'],
  loop: true,
  startDelay: 1e3,
  backDelay: 2e3,
 });

 /* Scroll on given section */
 $('.scrollBtn').click(function (e) {
  $('.navbar-collapse').collapse('hide');
  const section = $(this).data('section');
  $('html, body').animate({
   scrollTop: $(`.` + section).offset().top - 100,
  });
 });

 /* Header scroll nav design */
 $(window).scroll(function (e) {
  const navbar = $('#header-section').find('.navbar');
  const top = $(this).scrollTop();
  console.log(navbar);
  if (top > 500) {
   navbar.removeClass('bg-transparent');
   navbar.addClass('bg-sticky');
  } else {
   navbar.removeClass('bg-sticky');
   navbar.addClass('bg-transparent');
  }
 });

 /* Open hire modal */
 $('#hireMe').click(function (e) {
  $('#hireMeModal').modal('show');
 });
});
