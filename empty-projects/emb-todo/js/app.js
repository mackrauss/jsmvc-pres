// unsure if that needs to be on window but seems to be the convention
window.Todos = Ember.Application.create();
// by switching the adapter we can point at server or local data (This is cool)
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();