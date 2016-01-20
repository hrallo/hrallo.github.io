var app = angular.module('StarterApp', ['ngMaterial'])

  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('pink', {
        default: '300'
      })
      .accentPalette('green', {
        default: '800',
        'hue-1': '500'
      })
      .warnPalette('brown', {
        default: '500',
        'hue-1': '400'
      })
  })

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {


}]);

app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
      angular.element($window).bind("scroll", function() {
         if (this.pageYOffset >= 64) {
           element.addClass('is-collapsed');
         } else {
           element.removeClass('is-collapsed');
         }
      });
    };
});