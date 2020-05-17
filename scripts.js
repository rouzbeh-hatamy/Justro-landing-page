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
});
