import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  user: Ember.inject.service(),

  beforeModel() {
    this.get("user").restoreSession().then((loggedIn) => {
      if(loggedIn) {
        this.transitionTo('station', 4916);
      }
    });
  },

  model() {
    return config.githubApiKey;
  },
});
