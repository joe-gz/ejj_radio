"use strict";

(function (){
  angular
  .module("songs")
  .controller("SongsIndexController",[
    "SongsFactory",
    SongIndexControllerFunction
  ]);

  function SongIndexControllerFunction(SongsFactory){
    console.log("Songs");
    this.songs = SongsFactory.query()
  }

}());
