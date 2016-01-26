import Route from 'ember-route';
import service from 'ember-service/inject';

export default Route.extend({
  stations: service(),

  model() {
    return this.get('stations').changelog();
  },
});
