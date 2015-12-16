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
    .state("songsIndex",{
      url:"/songs",
      templateUrl:"js/songs/index.html",
      controller:"SongsIndexController",
      controllerAs:"SongsIndexViewModel"
    })
    .state("songNew",{
      url:"/songs/new",
      templateUrl:"js/songs/new.html",
      controller:"SongsNewController",
      controllerAs:"SongsNewViewModel"
    })
    .state("songEdit",{
      url:"/songs/:id/edit",
      templateUrl:"js/songs/edit.html",
      controller:"SongsEditController",
      controllerAs:"SongsEditViewModel"
    })
    .state("songShow",{
      url:"/songs/:id",
      templateUrl:"js/songs/show.html",
      controller:"SongsShowController",
      controllerAs:"SongsShowViewModel"
    })

  }

}())
