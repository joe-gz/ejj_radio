"use strict";

(function (){
  angular
  .module("songs")
  .controller("SongsShowController",[
    "SongsFactory",
    "$stateParams",
    SongShowControllerFunction
  ]);

  function SongShowControllerFunction(SongsFactory, $stateParams){
    this.song = SongsFactory.get({id: $stateParams.id})

    this.destroy = function(){
      this.song.$delete({id: $stateParams.id})
    }
  }

}());
