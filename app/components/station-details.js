import Component from 'ember-component';
import computed from 'ember-computed';
import service from 'ember-service/inject';

export default Component.extend({
  stations: service(),
  station: null,

  parent: computed('station', function() {
    return this.get('stations').findById(this.get('station.parent_station_id'));
  }),

  children: computed('station', function() {
    return this.get('stations.all').filterBy('parent_station_id', this.get('station.id'));
  }),

  languages: ['de', 'en', 'es', 'fr', 'it', 'nl', 'cs', 'da', 'hu', 'ja', 'ko', 'pl', 'pt', 'ru', 'sv', 'tr', 'zh'].map(locale => `info:${locale}`),
});
