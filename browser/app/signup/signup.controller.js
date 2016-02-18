app.controller('SignupCtrl', function($scope, Auth, $state) {
  
  $scope.signup = function(user) {
    Auth.signup(user)
    .then(function() {
      $state.go('stories');
    })
  }
  
})