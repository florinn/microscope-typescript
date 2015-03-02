/// <reference path="../../../_all.ts"/>

Template.notifications.helpers({
  notifications: () => {
    return Notifications.find({userId: Meteor.userId(), read: false});
  },
  notificationCount: () => {
  	return Notifications.find({userId: Meteor.userId(), read: false}).count();
  }
});

Template.notificationItem.helpers({
  notificationPostPath: () => {
    return Router.routes.postPage.path({_id: this.postId});
  }
});

Template.notificationItem.events({
  'click a': () => {
    Notifications.update(this._id, {$set: {read: true}});
  }
});