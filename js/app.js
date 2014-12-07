var page = angular.module('summernote-page', ['ngRoute']);

page.controller('PageController', function ($scope) {
  var $body = $(document.body);
  var $navbar = $('.bs-page-navbar');

  $scope.$on('$routeChangeSuccess', function () {
    var $sidebar = $('.bs-page-sidebar');

    $body.scrollspy({
      target: '.bs-page-sidebar',
      offset: $navbar.height()
    });

    $sidebar.affix({
      offset: {
        top: function() {
          var offsetTop = $sidebar.offset().top;
          var nPadding = 20;
          return (this.top = offsetTop - nPadding - $navbar.height());
        }, bottom: function() {
          return (this.bottom = $('.bs-page-footer').outerHeight(true));
        }
      } 
    });

    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  });
});

page.config(['$routeProvider', '$locationProvider',
            function ($routeProvider, $locationProvider) {

  $routeProvider.when('/', {
    templateUrl: '/html/main.html'
  }).when('/features', {
    templateUrl: '/html/features.html',
    controller: 'PageController'
  }).when('/example', {
    templateUrl: '/html/example.html',
    controller: 'PageController'
  }).when('/history', {
    templateUrl: '/html/history.html',
    controller: 'PageController'
  }).when('/about', {
    templateUrl: '/html/about.html'
  }).otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(true);
}]);
