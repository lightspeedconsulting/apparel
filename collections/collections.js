Customers = new Meteor.Collection('customers');
Forms = new Meteor.Collection('forms');
StyleChoices = new Meteor.Collection('styleChoices');
Orders = new Meteor.Collection('orders');
Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: process.env.UPLOAD_PATH, maxTries:10})]
});
FS.debug = true;

//TODO: obviously change trivially true return when we implement user login
Images.allow({
  insert: function(userId, doc) {
    return true;
  },
  update: function(userId, doc, fieldNames, modifier) {
    return true;
  },
  remove: function(userId, doc) {
    return true;
  },
  download: function(userId, doc) {
    return true;
  }
});
