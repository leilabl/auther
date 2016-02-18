app.controller('SignupCtrl', function($scope, Signup, $state) {
  
  $scope.createUser = function() {
    Signup.createUser({
      email: $scope.user.email,
      password: $scope.user.password
    }).then(function() {
      $state.go('stories');
    })
  }
  
})