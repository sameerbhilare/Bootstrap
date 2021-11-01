$(document).ready(function () {
  // togglng hamburger menu
  $('.nav-button').click(function () {
    $('.nav-button').toggleClass('change'); // add/remove 'change' class on click of nav-button
  });

  // window scroll event - to animate navigation bar
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

  // window scroll event - to animate camera and text in the mission section
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    console.log(position);
    if (position >= 650) {
      $('.camera-img').addClass('fromLeft');
      $('.mission-text').addClass('fromRight');
    } else {
      $('.camera-img').removeClass('fromLeft');
      $('.mission-text').removeClass('fromRight');
    }
  });
});
