import Component from 'ember-component';
import service from 'ember-service/inject';

export default Component.extend({
  stations: service(),

  didInsertElement() {
    this.$('#autocomplete-input').on('select', (evt) => {
      this.sendAction('displayStation', evt.target.value);
      evt.target.value = '';
    });
  }
});
