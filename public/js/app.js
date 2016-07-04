angular.module('myWebsite',
[
'myWebsite.slides',
'myWebsite.animation',
'myWebsite.presentation',
'ui.router',
'ngAnimate'
])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/slides/1');
  $stateProvider
  .state('slides', {
    url: '/slides/:id',
    templateUrl: 'views/template.html',
    controller: 'PresentationController'
  })
  .state('end', {
    url: '/end',
    templateUrl: 'views/bookend.html',
    controller: 'PresentationController'
  })


});
