(function(){
  angular
  .module('songs')
  .directive('songForm', [
    '$state',
    'SongsFactory',
    songsForm])

    function songsForm($state, SongsFactory){
    return {
      templateUrl: 'js/songs/_song_form.html',
      restrict: "E",
      scope: {
        song: "=",
        formType: "@"
      },
      link: linkFunction
    }
    function linkFunction(scope){
      scope.create = function(){
        scope.song.$save(scope.song, function(song){
          $state.go("songShow", song)
        })
      }
    };
  }
})();
