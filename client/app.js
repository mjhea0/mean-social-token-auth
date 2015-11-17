var app = angular.module('MyApp', ['ngRoute', 'satellizer']);

app.config(function($routeProvider, $authProvider, $locationProvider) {

  // *** satellizer settings *** //
  $authProvider.github({
    clientId: 'ADD CLIENT ID',
    redirectUri: 'UPDATE',
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
