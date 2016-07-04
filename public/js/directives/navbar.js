angular.module('myWebsite.navbar', [])

.controller('NavigationController', function($scope) {
})

.directive('navigation', function() {
  return {
    retrict: 'E',
    templateUrl: 'views/navbar.html',
    controller: 'NavigationController'
  }
})
