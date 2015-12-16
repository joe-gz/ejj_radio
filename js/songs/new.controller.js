"use strict";

(function (){
  angular
  .module("songs")
  .controller("SongsNewController",[
    "SongsFactory",
    SongNewControllerFunction
  ]);

  function SongNewControllerFunction(SongsFactory){
    this.song = new SongsFactory();
    this.create = function(){
      this.song.$save()
    }
  }

}());
