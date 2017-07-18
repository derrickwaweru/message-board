import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
    message: this.store.findAll('message'),
   answers: this.store.findAll('answers')
 });
   },
   actions: {
    saveMessage3(params) {
      var newMessage = this.store.createRecord('message', params);
      newMessage.save();
      this.transitionTo('index');
    }
  }
});
