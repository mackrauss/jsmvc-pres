// global variable with the name of our app
// the empty array are dependencies (like adding a infinite scroll module)
var ngTodo = angular.module("ngTodo", [])
  .config(function ($interpolateProvider){
    // pseudo code
    // $interpolateProvider.startSymbol("[[");
    // $interpolateProvider.endSymbol("]]");

    // routing goes here

    // changing http headers for whole app would happen here
  });

// services = singeltons (can be injected and provicd helper methods)
// directives = custom attributes
// filters = e.g. uppercase