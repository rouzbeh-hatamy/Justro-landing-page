/* eslint-disable no-unused-expressions */
$(document).ready(function() {
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

  const width = $(document).width();
  width <= 400
    ? $('.container').css('padding', '0')
    : $('.container').css('padding', ' 0 15px');
  if (width <= 400) {
    $('.browse-gallery').scrollLeft(40);
  }
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
});
