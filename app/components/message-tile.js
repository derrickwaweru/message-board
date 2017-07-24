import Ember from 'ember';

export default Ember.Component.extend({
  favouriteQuestions: Ember.inject.service(),
  // updateMessageForm:false,

    answerCount: Ember.computed('message.answers', function() {
        var answerAmount = this.get('message.answers.length');
        return answerAmount;
      }),
      actions: {
  addToFavs(message) {
    this.get('favouriteQuestions').add(message);
  }
}
});
