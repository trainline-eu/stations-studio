import Route from 'ember-route';
import service from 'ember-service/inject';

export default Route.extend({
  user: service(),
  actions: {
    logOut() {
      this.get('user').deleteSession();
      this.transitionTo('index');
    },
  },
});
