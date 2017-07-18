import DS from 'ember-data';

export default DS.Model.extend({
name:DS.attr(),
question:DS.attr(),
author:DS.attr(),
info:DS.attr(),
answers:DS.hasMany('answer',{async:true})

});
