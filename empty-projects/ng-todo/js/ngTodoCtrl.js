// Try to have one controller per app
// $http is a angular service to make ajax calls
// Angular injects the correct $http via black magic
// dependencies go in function ()
ngTodo.controller("NgTodoCtrl", function($http) {

  // do this in a service not here
  var promise = $http({
    method: "GET",
    url: "http://www.reddit.com/r/aww/search.json?q=kitty"
  });

  promise.success(function(data) {
    console.log(data);
  });

  // dummy data
  this.todos = [
    {val: "Make a sweet app", completed: false},
    {val: "Make a sweeter app", completed: true},
    {val: "Make a sweetest app", completed: false},
    {val: "Make a thing app", completed: true},
    {val: "Hello world", completed: false},
  ];

  this.addNewTask = function () {
    // put value into array at the front
    this.todos.unshift({ completed: false, val: this.newTask});
    // this.newTask comes from HTML line 26
    this.newTask = '';
  };

  this.clearCompleted = function () {
    // remove values from array that have completed true
    this.todos = this.todos.filter(function(el) {
      return !el.completed;
    });
  };

  this.removeTodo = function(index) {
    this.todos.splice(index, 1);
  };

});