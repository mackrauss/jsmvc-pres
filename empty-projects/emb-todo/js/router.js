// you have to use a Router since Ember needs it and Ember's router is great
Todos.Router.map(function() {
  this.resource('todos', { path:"/" });
});

// TodosRoute is Ember magic
Todos.TodosRoute = Ember.Route.extend({
  // load all data for route / - serious black magic
  model: function() {
    return this.store.find('todo');
  }
});