angular.module('myWebsite.presentation', [])

.controller('PresentationController', function($scope, $stateParams, $state, Animate, Slides) {
  $scope.id = parseInt($stateParams.id);
  $scope.animate = function() {
    Animate.single();
  }
  $scope.slide = Slides.serveSlide($scope.id-1);
  document.onkeydown = function(e) {
    if (e.keyCode == '39') {
      if ($scope.id < 5) {
        $scope.id++;
        Slides.transition('right');
      }
    }
    else if (e.keyCode == '37') {
      if ($scope.id > 1) {
        $scope.id--;
        Slides.transition('left');
      }
    }
    else if (e.keyCode == '40') {
      if ($scope.slide.img[$scope.slide.index] < $scope.slide.img.length-1) {
        $scope.slide.img[$scope.slide.index--];
      }
    }
    else if (e.keyCode == '38') {
      if ($scope.slide.img[$scope.slide.index] > 0) {
        $scope.slide.img[$scope.slide.index++];
      }
    }
    $state.go('slides', {id:$scope.id});
  }
})
