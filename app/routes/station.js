/* global saveAs */

import Ember from 'ember';

export default Ember.Route.extend({
  stations: Ember.inject.service(),
  user: Ember.inject.service(),

  beforeModel() {
    if(!this.get("user.loggedIn")) {
      this.transitionTo('/');
    }
  },

  model(params) {
    return this.get('stations').load().then(() => {
      return this.get('stations').findById(params.id);
    });
  },

  actions: {
    displayStation: function(station) {
      this.transitionTo("station", station);
    },

    downloadCSV: function() {
      let csv = this.get('stations').getCSV();
      var blob = new Blob([csv], {type: "text/csv;charset=utf-8"});
      saveAs(blob, "stations.csv", true);
    }
  }

});
