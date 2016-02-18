'use strict';

app.directive('signin', function ($state, $location, $http) {
	return {
		restrict: 'E',
		templateUrl: '/browser/components/signin/signin.html',
		scope: {
			action: '=', //pass a reference to the expression (action) - then in the link function it becomes scope.action - then call that method with the information that is passed in name
			name: '@' //uses name attribute to create a variable scope.name
		},
		link: function (scope) {
			scope.performAction = function () {
				// console.log(scope.user)
				scope.action(scope.user)
			}
		}

	}
});

// & create in the directive scope.name - when you use scope.name in directive run the expression as if it was in the controller -> when expression is evaluated -> any variable will look in the scope controller

//ng-click is ampersand
