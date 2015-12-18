"use strict";

(function (){
  angular
  .module("songs")
  .controller("SongsShowController",[
    "SongsFactory",
    "$stateParams",
    "$sce",
    SongShowControllerFunction
  ]);

  function SongShowControllerFunction(SongsFactory, $stateParams, $sce){
    this.song = SongsFactory.get({id: $stateParams.id})

    this.destroy = function(){
      this.song.$delete({id: $stateParams.id})
    }

    this.play = function(){
      this.songUrl = $sce.trustAsResourceUrl(this.song.audio_url)
    }

  }

}());
