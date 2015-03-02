/// <reference path="../../../_all.ts"/>

Template.postsList.helpers({
  postsWithRank: () => {
    return this.posts.map((post, index, cursor) => {
      post._rank = index;
      return post;
    });
  }
});
