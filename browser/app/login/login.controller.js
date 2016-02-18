app.controller('LoginCtrl', function($scope, LoginFactory, $state, User) {
  $scope.submitLogin = function() {

    var credentials = { 
      email: $scope.user.email,
      password: $scope.user.password
    }

    LoginFactory.login(credentials).then(function(user) {
      console.log(user);
      $state.go('user', {id: user._id});
    });

  }
})