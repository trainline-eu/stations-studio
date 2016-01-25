import Ember from 'ember';

export default Ember.Route.extend({
  user: Ember.inject.service(),

  model(params) {
    this.get("user").login(params.token)
    .then(() => {
      this.transitionTo('station', 4916);
    }).catch((err) => {
      Ember.Logger.error("Failed to login: ", err);
      this.transitionTo('/');
    });
  },

});
