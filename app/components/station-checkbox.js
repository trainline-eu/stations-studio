import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['station-checkbox'],
  stations: Ember.inject.service('stations'),
  station: null,
  field: null,

  checked: function() {
    return this.get(`station.${this.field}`) === 't';
  }.property('station'),

  actions: {
    onChange(checked){
      this.get("stations").update(this.station, this.get("field"), checked ? 't' : 'f');
    }
  }
});
