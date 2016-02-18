app.factory('LoginFactory', function($http) {
  return {
    login: function(credentials) {
      return $http.post('/login', credentials)
      .then(function(res) {
        return res.data.user;
      }).then(null, function(err) { console.error(err); });
    }
  }
})