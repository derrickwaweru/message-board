import Ember from 'ember';

export default Ember.Component.extend({
  updateMessageForm: false,
  actions: {
    updateMessageForm() {
      this.set('updateMessageForm', true);
    },
    update(message) {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        info: this.get('info'),
      };
      this.set('updateMessageForm', false);
      this.sendAction('update', message, params);
    }
  }
});
