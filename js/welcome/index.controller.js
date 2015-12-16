"use strict";

(function(){
  angular
  .module("welcome")
  .controller("WelcomeIndexController", [
    TestFunction
  ]);

  function TestFunction (){
    console.log("hello");
  }

}());
