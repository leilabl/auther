app.factory('Auth', function($state, $http) {

  var Auth = {};

  $http.get('/currentUser')
  .then(function(res) {
    console.log(res.data.user);
    var currentUser = res.data.user;
  })

  Auth.signup = function(data) {
    return $http.post('/signup', data)
    .then(function(res) {
      currentUser = res.data;
      return currentUser; 
    })
    .then(null, function(error) { 
      console.error(error);
    });
  }

  Auth.login = function(credentials) {
    return $http.post('/login', credentials)
    .then(function(res) {
      currentUser = res.data.user;
      return currentUser;
    }).then(null, function(err) { 
      console.error(err);
    });
  }

  Auth.getUser = function() {
    return $http.get('/currentUser').then(res => res.data.user);
  }

  Auth.logout = function() {
    return $http.get('/logout')
      .then(function () {
        currentUser = null;
        $state.go('home');
      })
      .then(null, function(err) { console.error(err)})
  }

  return Auth;

})