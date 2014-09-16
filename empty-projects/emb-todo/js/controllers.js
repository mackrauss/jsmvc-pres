// individual Object
Todos.TodoController = Ember.ObjectController.extend({
  actions: {
    removeTodo: function() {
      // Ember knows which record to get
      var todo = this.get('model');
      todo.deleteRecord();
      todo.save();
    }
  }
});

// Collection of objects
Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    createNewTodo: function() {
      var newVal = this.get('newTodo');
      var todo = this.store.createRecord('todo', {
        val: newVal,
        completed: false
      });
      this.set('newTodo', '');
      todo.save();
    },
    clearCompleted: function() {
      // filterBy finds all todo elements with completed being true
      var completed = this.filterBy("completed", true);
      completed.invoke('deleteRecord');
      completed.invoke('save')
    }
  }
});