$(document).ready(function () {
  // togglng hamburger menu
  $('.nav-button').click(function () {
    $('.nav-button').toggleClass('change'); // add/remove 'change' class on click of nav-button
  });

  // set currently clicked menu item as active
  $('.navbar-nav a').on('click', function () {
    $('.navbar-nav').find('li a.nav-active').removeClass('nav-active');
    $(this).addClass('nav-active');
  });

  // set home menu item as active when clicked on logo
  $('#logo').on('click', function () {
    $('.navbar-nav').find('li a.nav-active').removeClass('nav-active');
    $('a[href$="#banner"]').addClass('nav-active');
  });

  // window scroll event - to animate banner
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    //console.log(position);
    if (position <= 350) {
      // banner
      $('.header').css('opacity', '1'); // when user scrolls up
      $('.header').addClass('fromTopHeader');
      $('.home-social *').addClass('socialMedia');
    } else {
      // banner
      $('.header').css('opacity', '0'); // when user scrolls up from bottom, we should not show the header to have better UX
      $('.header').removeClass('fromTopHeader');
      $('.home-social *').removeClass('socialMedia');
    }
  });

  // window scroll event - to animate About
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    // console.log(position);
    if (position > 350 && position < 1300) {
      // about
      $('.about-title').css('opacity', '1'); // when user scrolls up
      $('.about-title').addClass('sectionTitleAnimation');
      // console.log('added sectionTitleAnimation');
    } else {
      // about
      $('.about-title').css('opacity', '0'); // when user scrolls up from bottom, we should not show the header to have better UX
      $('.about-title').removeClass('sectionTitleAnimation');
      // console.log('removed sectionTitleAnimation');
    }
  });

  // window scroll event - to animate camera and text in the mission section
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    // console.log(position);
    if (position > 350 && position < 1300) {
      $('.about-img').css('opacity', '1'); // when user scrolls up
      $('.about-img').addClass('fromLeft');

      $('.about-description').css('opacity', '1'); // when user scrolls up
      $('.about-description').addClass('fromRight');
    } else {
      $('.about-img').css('opacity', '0'); // when user scrolls up from bottom, we should not show the header to have better UX
      $('.about-img').removeClass('fromLeft');

      $('.about-description').css('opacity', '0'); // when user scrolls up from bottom, we should not show the header to have better UX
      $('.about-description').removeClass('fromRight');
    }
  });
});
