import Ember from 'ember';

export default Ember.Component.extend({
  stations: Ember.inject.service('stations'),
  station: null,

  parent: Ember.computed('station', function() {
    return this.get('stations').findById(this.get('station.parent_station_id'));
  }),

  children: Ember.computed('station', function() {
    return this.get('stations.all').filterBy('parent_station_id', this.get('station.id'));
  }),
  
  languages: ['de', 'en', 'es', 'fr', 'it', 'nl', 'cs', 'da', 'hu', 'ja', 'ko', 'pl', 'pt', 'ru', 'sv', 'tr', 'zh'].map(locale => `info:${locale}`),
});
