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
    $('a[href$="#home"]').addClass('nav-active');
  });
});
