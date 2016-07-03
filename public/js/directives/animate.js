angular.module('myWebsite.animateScreen', [])

.controller('AnimationController', function($scope) {
  $scope.message = 'Animate me!';
})

.directive('animate', function() {
  return {
    retrict: 'E',
    templateUrl: 'views/animate.html',
    controller: 'AnimationController'
    }
})
