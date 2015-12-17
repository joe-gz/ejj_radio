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
  }

}());
