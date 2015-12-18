(function(){
  angular
  .module('songs')
  .directive('songForm', [
    '$state',
    'SongsFactory',
    '$stateParams',
    songsForm
  ])

    function songsForm($state, SongsFactory, $stateParams){
    return {
      templateUrl: 'js/songs/_song_form.html',
      restrict: "E",
      scope: {
        song: "=",
        formType: "@",
        showCreate: "=",
        showEdit: "=",
        showDelete: "="
      },
      link: linkFunction
    }
    function linkFunction(scope){
      scope.create = function(){
        scope.song.$save(scope.song, function(song){
          $state.go("songShow", song)
        })
      }
      scope.update = function(){
        scope.song.$update({id: $stateParams.id}, function(){
          $state.go("songsIndex")
        })
      }
      scope.destroy = function(){
        scope.song.$delete({id: $stateParams.id}, function(){
          $state.go("songsIndex")
        })
      }
    };
  }
})();
