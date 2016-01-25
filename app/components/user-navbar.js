import Ember from 'ember';
export default Ember.Component.extend({
  user: Ember.inject.service(''),
  actions: {
    logOut() {
      this.sendAction('logOut');
    }
  }
});
