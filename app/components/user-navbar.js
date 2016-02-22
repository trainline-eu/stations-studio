import Component from 'ember-component';
import service from 'ember-service/inject';

export default Component.extend({
  user: service(),
  actions: {
    displayStation(station) {
      this.sendAction('displayStation', station);
    },
    downloadCSV() {
      this.sendAction('downloadCSV');
    },
    logOut() {
      this.sendAction('logOut');
    }
  }
});
