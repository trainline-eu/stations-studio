import Component from 'ember-component';
import service from 'ember-service/inject';

export default Component.extend({
  tagName: 'span',
  classNames: ['station-text-input'],
  stations: service(),
  station: null,
  field: null,

  actions: {
    onChange(value){
      this.get("stations").update(this.station, this.field, value);
    }
  }
});
