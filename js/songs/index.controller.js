"use strict";

(function (){
  angular
  .module("songs")
  .controller("SongsIndexController",[
    "SongsFactory",
    SongNewControllerFunction
  ]);

  function SongNewControllerFunction(SongsFactory){
    console.log("Songs");
    this.songs = SongsFactory.query()
  }

}());
