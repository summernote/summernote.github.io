$(function () {
  // sliding sidebar
  var $sidebar = $('.navbar-collapse');
  var $navbarButton = $('.navbar-toggle');
  var defaultSidebarMargin = $sidebar.css('margin-left');

  var isSidebarShown = function () {
    return $sidebar.css('margin-left') === '0px';
  };

  var hideSidebar = function () {
    $navbarButton.removeClass('in');
    $sidebar.css('margin-left', defaultSidebarMargin);
  };

  var showSidebar = function () {
    $navbarButton.addClass('in');
    $sidebar.css('margin-left', '0%');
  };

  var toggleSidebar = function () {
    if (isSidebarShown()) {
      hideSidebar();
    } else {
      showSidebar();
    }
  };

  $(document.body).click(function (e) {
    var $target = $(e.target);
    if ($target.closest('.navbar-toggle').length) {
      toggleSidebar();
    } else if (!$target.closest('.collapse').length) {
      hideSidebar();
    }
  });
});
