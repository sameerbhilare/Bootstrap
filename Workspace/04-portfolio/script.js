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

  // window scroll event - to animate About
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

  // window scroll event - to animate skills title
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    //console.log(position);
    if (position > 1100 && position < 1700) {
      $('.skills-title').css('opacity', '1'); // when user scrolls up
      $('.skills-title').addClass('sectionTitleAnimation');
    } else {
      $('.skills-title').css('opacity', '0'); // when user scrolls up from bottom, we should not show the header to have better UX
      $('.skills-title').removeClass('sectionTitleAnimation');
    }
  });

  // window scroll event - to animate frontend skills
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    //console.log(position);
    if (position > 1100 && position < 3500) {
      $('.frontend-progress').css('opacity', '1'); // when user scrolls up
      $('.frontend-progress').addClass('fromLeft');

      $('.frontend-description').css('opacity', '1'); // when user scrolls up
      $('.frontend-description').addClass('fromRight');

      $('.backend-progress').css('opacity', '1'); // when user scrolls up
      $('.backend-progress').addClass('fromLeft');

      $('.backend-description').css('opacity', '1'); // when user scrolls up
      $('.backend-description').addClass('fromRight');

      $('.other-progress').css('opacity', '1'); // when user scrolls up
      $('.other-progress').addClass('fromLeft');

      $('.other-description').css('opacity', '1'); // when user scrolls up
      $('.other-description').addClass('fromRight');
    } else {
      $('.frontend-progress').css('opacity', '0'); // when user scrolls up from bottom, we should not show the header to have better UX
      $('.frontend-progress').removeClass('fromLeft');

      $('.frontend-description').css('opacity', '0'); // when user scrolls up from bottom, we should not show the header to have better UX
      $('.frontend-description').removeClass('fromRight');

      $('.backend-progress').css('opacity', '0'); // when user scrolls up from bottom, we should not show the header to have better UX
      $('.backend-progress').removeClass('fromLeft');

      $('.backend-description').css('opacity', '0'); // when user scrolls up from bottom, we should not show the header to have better UX
      $('.backend-description').removeClass('fromRight');

      $('.other-progress').css('opacity', '0'); // when user scrolls up from bottom, we should not show the header to have better UX
      $('.other-progress').removeClass('fromLeft');

      $('.other-description').css('opacity', '0'); // when user scrolls up from bottom, we should not show the header to have better UX
      $('.other-description').removeClass('fromRight');
    }
  });

  // window scroll event - to animate timeline
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    //console.log(position);
    if (position > 2500 && position < 4600) {
      $('.timeline-title').css('opacity', '1'); // when user scrolls up
      $('.timeline-title').addClass('sectionTitleAnimation');

      $('.event-1').css('opacity', '1'); // when user scrolls up
      $('.event-1').addClass('animate-event-1');

      $('.event-2').css('opacity', '1'); // when user scrolls up
      $('.event-2').addClass('animate-event-2');

      $('.event-3').css('opacity', '1'); // when user scrolls up
      $('.event-3').addClass('animate-event-3');

      $('.event-4').css('opacity', '1'); // when user scrolls up
      $('.event-4').addClass('animate-event-4');
    } else {
      $('.timeline-title').css('opacity', '0'); // when user scrolls up
      $('.timeline-title').removeClass('sectionTitleAnimation');

      $('.event-1').css('opacity', '0'); // when user scrolls up from bottom, we should not show the timeline to have better UX
      $('.event-1').removeClass('animate-event-1');

      $('.event-2').css('opacity', '0'); // when user scrolls up from bottom, we should not show the timeline to have better UX
      $('.event-2').removeClass('animate-event-2');

      $('.event-3').css('opacity', '0'); // when user scrolls up from bottom, we should not show the timeline to have better UX
      $('.event-3').removeClass('animate-event-3');

      $('.event-4').css('opacity', '0'); // when user scrolls up from bottom, we should not show the timeline to have better UX
      $('.event-4').removeClass('animate-event-4');
    }
  });

  // close menu on click
  $('.nav-item').click(function (e) {
    $('.navbar-collapse').removeClass('show'); // 'show' is default bootstrap class which shows the nav menu on small devices
    $('.navbar-toggler').removeClass('change'); // change class was added above on '.nav-button' click
  });
});
