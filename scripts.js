/* eslint-disable */
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

  // web

  // nav bar

  if (width > 768) {
    $(window).scroll(function() {
      const scroll = $(window).scrollTop();
      if (scroll >= 150) {
        $('#navbar').css('background-color', 'white');
        $('#navbar').css(
          'box-shadow',
          '0px 9px 5px -5px #e0e0e0, 0px 0px 5px -5px #e0e0e0'
        );
      } else {
        $('#navbar').css('background-color', 'unset');
        $('#navbar').css('box-shadow', 'none');
      }
    });

    
      // ideas row on web

    $('.categories div').hover(function(){
      $('.categories div span').css('visibility','visible')
      $('.categories div span').css('height','50px')
    },function(){
      $('.categories div span').css('visibility','hidden')
      $('.categories div span').css('height','0px')
    })
  }
 
});
// icons row
function clickedIcon(el) {
  $('#icons')
    .children()
    .removeClass('svg-wrapper');
  $(el).addClass('svg-wrapper');
}
