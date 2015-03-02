/// <reference path="../../../_all.ts"/>

Template.errors.helpers({
  errors: () => {
    return Errors.find();
  }
});

Template.error.rendered = () => {
  var error = this.data;
  Meteor.setTimeout(() => {
    Errors.remove(error._id);
  }, 3000);
};