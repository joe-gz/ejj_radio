(function(){
  angular
  .module("songs")
  .controller("SessionsController", function($auth, $state, $scope){
    this.signinForm = {};
    this.signin = function() {
      $auth.submitLogin(this.signinForm)
      .then(function(resp) {
        $state.go("songsIndex");
      })
      .catch(function(resp) {
        console.log("Signin failure:", resp);
      });
    };

    this.signupForm = {};
    this.signup = function() {
      $auth.submitRegistration(this.signupForm)
        .then(function(resp) {
          console.log("Great success, you made an account!");
          $state.go('songsIndex');
        })
      .catch(function(resp){
        console.log("error in making it");
      });
    };

    $scope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      if(toState.name == 'signout') {
        $auth.signOut();
      }
    });
  });
})();
