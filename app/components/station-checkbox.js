import Component from 'ember-component';
import computed from 'ember-computed';
import service from 'ember-service/inject';

export default Component.extend({
  tagName: 'span',
  classNames: ['station-checkbox'],
  stations: service(),
  station: null,
  field: null,

  checked: computed('station', function() {
    return this.get(`station.${this.field}`) === 't';
  }),

  actions: {
    onChange(checked){
      this.get("stations").update(this.station, this.get("field"), checked ? 't' : 'f');
    }
  }
});
