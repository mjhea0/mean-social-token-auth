var app = angular.module('MyApp', ['ngRoute', 'satellizer']);

app.config(function($routeProvider, $authProvider, $locationProvider) {

  // *** satellizer settings *** //
  $authProvider.github({
    url: '/auth/github',
    clientId: 'UPDATE ME',
    redirectUri: window.location.origin
  });
  $authProvider.google({
    url: '/auth/google',
    clientId: 'UPDATE ME',
    redirectUri: window.location.origin,
  });
  $authProvider.instagram({
    url: '/auth/instagram',
    clientId: 'f146a03f10324f9e9ebf35dbe3eaa4a7',
    redirectUri: window.location.origin,
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
