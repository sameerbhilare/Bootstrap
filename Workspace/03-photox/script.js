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

  // filter gallary images based on selected filter
  $('.gallary-list-item').click(function () {
    // get value of 'data-filter' attribute of gallary-list-item
    let value = $(this).attr('data-filter');
    if (value === 'all') {
      $('.filter').show(300); // 300 ms
    } else {
      // filter out elements which does NOT have given class
      $('.filter')
        .not('.' + value)
        .hide(300);

      // show with matching class names
      $('.filter')
        .filter('.' + value)
        .show();
    }
  });

  // Add class 'active-item' to the currently selected list item
  $('.gallary-list-item').click(function () {
    // mark selected item as active and remove active class from other list-items
    $(this).addClass('active-item').siblings().removeClass('active-item');
  });
});
