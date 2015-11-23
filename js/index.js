$(document).ready(function() {
  if ($('.card-list').length) {
    $('.card-list-inner').slick({
      speed: 300,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendArrows: $('.card-arrow'),
      variableWidth: true
    });
  }
});
