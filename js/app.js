"use strict";

(function(){
  angular
  .module("radio", [
    "ui.router",
    "songs",
    "welcome"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("welcomeIndex",{
      url:"/welcome",
      templateUrl:"js/welcome/index.html",
      controller:"WelcomeIndexController",
      controllerAs:"WelcomeIndexViewModel"
    })
    // .state("songsIndex",{
    //   url:"/songs",
    //   templateUrl:"js/songs/index.html",
    //   controller:"SongsIndexController",
    //   controllerAs:"SongsIndexViewModel"
    // })
  }

}())
