app.controller('LoginCtrl', function($scope, Auth, $state) {
  $scope.login = function(user) {
    console.log(user);

    Auth.login(user)
    .then(function(user) {
      // console.log(user);
      $state.go('stories');
    });

  }
})