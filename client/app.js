var app = angular.module('MyApp', ['ngRoute', 'satellizer']);

app.config(function($routeProvider, $authProvider, $locationProvider) {

  // *** satellizer settings *** //
  $authProvider.github({
    url: '/auth/github',
    clientId: '1aaf1bf583d5e425dc8b',
    redirectUri: window.location.origin
  });

  $routeProvider
    .when('/', {
      templateUrl: 'partials/welcome.html'
    })
    .when('/home', {
      templateUrl: 'partials/home.html'
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginCtrl'
    })
    .when('/signup', {
      templateUrl: 'partials/signup.html',
      controller: 'signupCtrl'
    })
    .otherwise('/');

});
