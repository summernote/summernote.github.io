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
      $navbarButton = $('.navbar-toggle'),
      defaultSidebarMargin = $sidebar.css('margin-left');

  var toggleSidebar = function() {
     if ($sidebar.css('margin-left') === defaultSidebarMargin) { // closed
       $navbarButton.addClass('in');
       $sidebar.css('margin-left', '0%');
    } else if ($sidebar.css('margin-left') === '0px') { // opened
       $navbarButton.removeClass('in');
      $sidebar.css('margin-left', defaultSidebarMargin);
    }
  };
  $navbarButton.click(function() {
    toggleSidebar();
  });

  if ($navbarButton.css('display') === 'block') {
    $(document.body).click(function(e) {
      if (!$(e.target).closest('.collapse').length) {
        toggleSidebar();
      }
    });
  }
});
