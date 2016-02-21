import Route from 'ember-route';
import service from 'ember-service/inject';

export default Route.extend({
  user: service(),
  actions: {
    displayStation(station) {
      this.transitionTo('station', station);
    },
    logOut() {
      this.get('user').deleteSession();
      this.transitionTo('index');
    },
  },
});
