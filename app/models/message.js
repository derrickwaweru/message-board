import DS from 'ember-data';

export default DS.Model.extend({
number:DS.attr(),
question:DS.attr(),
author:DS.attr(),
info:DS.attr()
});
