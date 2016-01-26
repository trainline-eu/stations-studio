import Ember from 'ember';
import Route from 'ember-route';
import service from 'ember-service/inject';

export default Route.extend({
  user: service(),

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
