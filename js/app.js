"use strict";

(function(){
  angular
  .module("radio", [
    "ui.router",
    "ng-token-auth",
    "songs",
    "welcome"
  ])
  .config([
    "$authProvider",
    AuthConfigFunction
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function AuthConfigFunction($authProvider){
    $authProvider.configure({
      apiUrl: "http://localhost:3000"
    });
  }

  function RouterFunction($stateProvider){
    $stateProvider
    .state("signin",{
      url:"/signin",
      templateUrl:"js/users/signin.html",
      controller:"SessionsController",
      controllerAs:"SessionsViewModel"
    })
    .state("signout",{
      url:"/signout",
      templateUrl:"js/users/signout.html",
      controller:"SessionsController",
      controllerAs:"SessionsViewModel"
    })
    .state("signup",{
      url:"/signup",
      templateUrl:"js/users/signup.html",
      controller:"SessionsController",
      controllerAs:"SessionsViewModel"
    })
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
