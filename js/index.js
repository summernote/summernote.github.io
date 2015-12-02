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

  // sliding sidebar
  var $sidebar = $('.navbar-collapse'),
      defaultSidebarMargin = $sidebar.css('margin-left');
  var toggleSidebar = function() {
     if ($sidebar.css('margin-left') === defaultSidebarMargin) {
      $sidebar.css('margin-left', '0%');
    } else if ($sidebar.css('margin-left') === '0px') {
      $sidebar.css('margin-left', defaultSidebarMargin);
    }
  };
  $('.navbar-toggle').click(function() {
    toggleSidebar();
  });

  if ($('.navbar-toggle').css('display') === 'block') {
    $(document.body).click(function(e) {
      if (!$(e.target).closest('.collapse').length) {
        toggleSidebar();
      }
    });
  }
});
