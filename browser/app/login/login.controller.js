app.controller('LoginCtrl', function($scope, LoginFactory, $state) {
  $scope.login = function(user) {
    console.log(user);

    LoginFactory.login(user).then(function(user) {
      // console.log(user);
      $state.go('stories');
    });

  }
})