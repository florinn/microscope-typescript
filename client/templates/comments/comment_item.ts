/// <reference path="../../../_all.ts"/>

Template.commentItem.helpers({
  submittedText: () => {
    return this.submitted.toString();
  }
});