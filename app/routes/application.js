import Ember from 'ember';

export default Ember.Route.extend({
  user: Ember.inject.service(),
  actions: {
    logOut: function() {
      this.get('user').deleteSession();
      this.transitionTo('index');
    },
  },
});
