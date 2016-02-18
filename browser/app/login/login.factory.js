app.factory('LoginFactory', function($http, User) {
  return {
    login: function(credentials) {
      return $http.post('/login', credentials)
      .then(function(user) {
        var loggedInUser = new User();
        return loggedInUser.fetch();
      });
    }
  }
})