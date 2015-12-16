"use strict";

(function (){
  angular
  .module("songs")
  .controller("SongsEditController",[
    "SongsFactory",
    "$stateParams",
    SongEditControllerFunction
  ]);

  function SongEditControllerFunction(SongsFactory, $stateParams){
    this.song = SongsFactory.get({id: $stateParams.id})
    this.update = function(){
      this.song.$update({id: $stateParams.id})
    }
    
  }

}());
