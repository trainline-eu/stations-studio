import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('station-autocomplete', 'Integration | Component | station autocomplete', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{station-autocomplete}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#station-autocomplete}}
      template block text
    {{/station-autocomplete}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
