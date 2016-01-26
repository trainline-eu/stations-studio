import Component from 'ember-component';
import service from 'ember-service/inject';

export default Component.extend({
  user: service(),
  actions: {
    logOut() {
      this.sendAction('logOut');
    }
  }
});
