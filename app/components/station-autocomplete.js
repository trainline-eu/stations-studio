import Component from 'ember-component';
import service from 'ember-service/inject';

export default Component.extend({
  stations: service(),

  actions: {
    findStation(term) {
      if (term.length <= 2) {
        return [];
      }

      return this.get('stations.all').filter((station) => {
        return station.name.toLowerCase().includes(term.toLowerCase());
      }).map((station) => {
        return {
          id: station.id,
          name: station.name,
          is_suggestable: station.is_suggestable === 't'
        };
      });

    },

    displayStation(station) {
      this.sendAction('displayStation', station.id);
    }
  }
});
