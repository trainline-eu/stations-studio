import Ember from 'ember';

export default Ember.Component.extend({
  stations: Ember.inject.service(),
  model: null,
  status: '',
  branchName: null,
  commitMessage: null,
  actions: {
    createPR() {
      this.set('status', 'Creating pull request<i class="fa fa-spin fa-spinner"></i>');
      this.get('stations').createPullRequest(this.get('branchName'), this.get('commitMessage'))
      .then(() => {
        this.set('status', '<i class="fa fa-check"></i>Pull Request created!');
      }).catch((err) => {
        Ember.Logger.error('PR error', err);
        this.set('status', '<i class="fa fa-times"></i>Pull requested creation failed');
      });
    }
  }
});
