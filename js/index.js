$(document).ready(function() {
  if ($('.card-list').length) {
    var $cardArrow = $('.card-arrow'),
        $cardListInner = $('.card-list-inner');
    $cardListInner.scroll(function() {
      $cardArrow.addClass('disappear');
      if ($cardListInner.scrollLeft() < 20) {
        $cardArrow.removeClass('disappear');
      }
    });
  }
});
