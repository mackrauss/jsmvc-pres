// global variable with the name of our app
// the empty array are dependencies (like adding a infinite scroll module)
var ngTodo = angular.module("ngTodo", [])
  .config(function (){

  });

// services = singeltons (can be injected and provicd helper methods)
// directives = custom attributes
// filters = e.g. uppercase