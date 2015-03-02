/// <reference path="../../_all.ts"/>

Notifications = new Mongo.Collection('notifications');

Notifications.allow({
  update: (userId, doc, fieldNames) => {
    return ownsDocument(userId, doc) && 
      fieldNames.length === 1 && fieldNames[0] === 'read';
  }
});

createCommentNotification = (comment) => {
  var post = Posts.findOne(comment.postId);
  if (comment.userId !== post.userId) {
    Notifications.insert({
      userId: post.userId,
      postId: post._id,
      commentId: comment._id,
      commenterName: comment.author,
      read: false
    });
  }
};