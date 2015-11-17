app.controller('loginCtrl', function($scope, $auth, $rootScope, $window, $location) {

  $scope.login = function() {

    var user = {
      email: $scope.email,
      password: $scope.password
    };

    $auth.login(user)
      .then(function(response) {
        console.log(response);
        $window.localStorage.currentUser = JSON.stringify(response.data.user);
        $rootScope.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        $location.path('/home');
      })
      .catch(function(response) {
        console.log(response);
      });
  };

  $scope.authenticate = function(provider) {

    $auth.authenticate(provider)
      .then(function(response) {
        $window.localStorage.currentUser = JSON.stringify(response.data.user);
        $rootScope.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(response);
        $location.path('/home');
      })
    .catch(function(response) {
      console.log(response);
    });

  };

});
