import Ember from 'ember';
var message=[{
  id:1,
  question:"What are some of the scripting langauges used in moringa school?",
  author:"Machaveli West",
  info:"This is based on your prior knwledge on moringa and the languages in broad"
},
{ 
id:2,
question:"What is your favorite meal when most hungry",
author:"Mlafi fulani",
info:"Do not include dessert"
},
{
id:3,
question:"What is your favorite movie/film",
author:"Thor Legend",
info:"Are you worthy of lifting my hammer?"
}]
export default Ember.Route.extend({
  model () {
    return message;
  },
});
