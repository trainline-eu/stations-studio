import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('/');
  this.route('login', {path: 'login/:token'});
  this.route('station', {path: 'station/:id'});
  this.route('changelog');
});

export default Router;
