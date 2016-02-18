'use strict';

app.controller('StoryDetailCtrl', function ($scope, story, users, Auth) {
	$scope.story = story;
	$scope.users = users;
	$scope.$watch('story', function () {
		$scope.story.save();
	}, true);
  
  $scope.editPermission = false;

  Auth.getUser()
  .then(function(user) {
    console.log(currentUser);
    if (user) {
      if (user.isAdmin) $scope.editPermission = true;
    }
  })


});