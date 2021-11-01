$(document).ready(function () {
  // togglng hamburger menu
  $('.nav-button').click(function () {
    $('.nav-button').toggleClass('change'); // add/remove 'change' class on click of nav-button
  });

  // window scroll event
  $(window).scroll(function () {
    let position = $(this).scrollTop(); // calculates position in px when we scroll down
    console.log(position);
    if (position >= 200) {
      // add custom-navbar class when scroll position is >= 200
      $('.nav-menu').addClass('custom-navbar');
    } else {
      // remove custom-navbar class when scroll position is < 200
      $('.nav-menu').removeClass('custom-navbar');
    }
  });
});
