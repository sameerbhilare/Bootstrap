$(document).ready(function () {
  // togglng hamburger menu
  $('.nav-button').click(function () {
    $('.nav-button').toggleClass('change'); // add/remove 'change' class on click of nav-button
  });

  // set currently clicked menu item as active
  $('.navbar-nav a').on('click', function () {
    console.log('clicked on nav');
    $('.navbar-nav').find('li a.nav-active').removeClass('nav-active');
    $(this).addClass('nav-active');
  });

  // set home menu item as active when clicked on logo
  $('#logo').on('click', function () {
    console.log('clicked on logo');
    $('.navbar-nav').find('li a.nav-active').removeClass('nav-active');
    $('a[href$="#banner"]').addClass('nav-active');
  });

  // window scroll event - to animate banner
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    // console.log(position);
    if (position <= 350) {
      $('.header').css('opacity', '1'); // when user scrolls up
      $('.header').addClass('fromTopHeader');
      $('.home-social *').addClass('socialMedia');
    } else {
      $('.header').css('opacity', '0'); // when user scrolls up from bottom, we should not show the header to have better UX
      $('.header').removeClass('fromTopHeader');
      $('.home-social *').removeClass('socialMedia');
    }
  });
});
