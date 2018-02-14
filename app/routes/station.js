/* global saveAs */

import Route from 'ember-route';
import service from 'ember-service/inject';

export default Route.extend({
  stations: service(),
  user: service(),

  model(params) {
    return this.get('stations').load().then(() => {
      return this.get('stations').findById(params.id);
    });
  },

  actions: {
    downloadCSV() {
      let csv = this.get('stations').getCSV();
      var blob = new Blob([csv], {type: "text/csv;charset=utf-8"});
      saveAs(blob, "stations.csv", true);
    }
  }

});
