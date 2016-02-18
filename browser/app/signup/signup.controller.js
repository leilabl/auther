app.controller('SignupCtrl', function($scope, Signup, $state) {
  
  $scope.signup = function(user) {
    Signup.createUser(user)
    .then(function() {
      $state.go('stories');
    })
  }
  
})