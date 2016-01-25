import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['station-text-input'],
  stations: Ember.inject.service('stations'),
  station: null,
  field: null,

  actions: {
    onChange(value){
      this.get("stations").update(this.station, this.field, value);
    }
  }
});
