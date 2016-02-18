app.factory('Signup', function($http) {
  return {
    createUser: function(data) {
      return $http.post('/signup', data)
      .then(function(res) { return res.data; })
      .then(null, function(error) { console.error(error); });
    }
  }
})