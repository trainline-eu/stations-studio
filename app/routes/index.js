import Route from 'ember-route';
import service from 'ember-service/inject';
import config from '../config/environment';

export default Route.extend({
  user: service(),

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
