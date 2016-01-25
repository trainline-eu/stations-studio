import Service from 'ember-service';
import Ember from 'ember';

/* globals Github */

export default Service.extend({
  user: null,
  loggedIn: null,
  token: null,
  val: true,

  login(token) {
    let github = new Github({
      token: token,
      auth: "oauth"
    });

    let userPromise = Ember.RSVP.denodeify(github.getUser().show);

    return userPromise("")
    .then((infos) => {
      this.set("user", infos);
      this.set("loggedIn", true);
      this.set("token", token);
      localStorage.setItem("github_token", token);

      return infos;
    });
  },

  restoreSession() {
    let localToken = localStorage.getItem("github_token");
    if(localToken) {
      return this.login(localToken);
    } else {
      return Ember.RSVP.reject();
    }
  },

  deleteSession() {
    console.log('deleting token');
    this.set("user", null);
    this.set("loggedIn", false);
    this.set("token", null);
    localStorage.removeItem('github_token');
  }
});
