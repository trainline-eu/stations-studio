import Ember from 'ember';

export default Ember.Component.extend({
  stations: Ember.inject.service('stations'),

  bindSelectEvent: Ember.on('didInsertElement', function() {
    this.$('#autocomplete-input').on('select', (evt) => {
      this.sendAction('displayStation', evt.target.value);
      evt.target.value = '';
    });
  }),
});
