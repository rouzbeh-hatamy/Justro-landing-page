/* eslint-disable no-unused-expressions */
$(document).ready(function() {
  // search button

  let isMenuOpen = false;
  $('#toggleSearch').click(function() {
    if (isMenuOpen) {
      $('.search').css('width', '0');
      isMenuOpen = false;
    } else {
      $('.search').css('width', '150px');
      isMenuOpen = true;
    }
    console.log(isMenuOpen);
  });
  // mobile screen configuration
  const width = $(document).width();
  width <= 768
    ? $('.container').css('padding', '0')
    : $('.container').css('padding', ' 0 15px');
  // scroll left on mobile
  if (width <= 768) {
    $('.browse-gallery').scrollLeft(40);
    $('.categories').scrollLeft(380);
  }
  // change background on buttons
  $('.hotel').click(function() {
    $('.didani').removeClass('svg-wrapper');
    $('.resturant').removeClass('svg-wrapper');
    $('.plane').removeClass('svg-wrapper');
    $('.nearMe').removeClass('svg-wrapper');
    $('.hotel').addClass('svg-wrapper');
  });
  $('.didani').click(function() {
    $('.hotel').removeClass('svg-wrapper');
    $('.resturant').removeClass('svg-wrapper');
    $('.plane').removeClass('svg-wrapper');
    $('.nearMe').removeClass('svg-wrapper');
    $('.didani').addClass('svg-wrapper');
  });
  $('.resturant').click(function() {
    $('.hotel').removeClass('svg-wrapper');
    $('.didani').removeClass('svg-wrapper');
    $('.plane').removeClass('svg-wrapper');
    $('.nearMe').removeClass('svg-wrapper');
    $('.resturant').addClass('svg-wrapper');
  });
  $('.plane').click(function() {
    $('.hotel').removeClass('svg-wrapper');
    $('.resturant').removeClass('svg-wrapper');
    $('.didani').removeClass('svg-wrapper');
    $('.nearMe').removeClass('svg-wrapper');
    $('.plane').addClass('svg-wrapper');
  });
  $('.nearMe').click(function() {
    $('.hotel').removeClass('svg-wrapper');
    $('.resturant').removeClass('svg-wrapper');
    $('.plane').removeClass('svg-wrapper');
    $('.didani').removeClass('svg-wrapper');
    $('.nearMe').addClass('svg-wrapper');
  });

  // web

  // nav bar

  if (width > 768) {
    $(window).scroll(function() {
      const scroll = $(window).scrollTop();
      if (scroll >= 150) {
        $('#navbar').css('background-color', 'white');
        $('#navbar').css('box-shadow', '-2.5px 4.3px 15px 0 #e0e0e0');
      } else {
        $('#navbar').css('background-color', 'unset');
        $('#navbar').css('box-shadow', 'none');
      }
    });

    // slider

    $('.carousel-item');
  }
});
