Customers = new Meteor.Collection('customers');
Forms = new Meteor.Collection('forms');
Orders = new Meteor.Collection('orders');
Emails = new Meteor.Collection('emails');
Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("images", {path: '/Users/duncanrenfrow-symon/Documents/Meteor_App/apparel/uploads', maxTries:10})]
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
StyleChoices = new Meteor.Collection('styleChoices', {
  schema: {
    caption: {
      type: String,
      label: "Caption",
      max: 200
    },
    path: {
      type: String,
      label: "Path to Image",
      max: 200
    },
    clothingType: {
      type: String,
      label: "Type of Clothing",
      max: 200
    },
    grouping: {
      type: String,
      label: "Grouping for a style choice like cuffs or columns",
      max: 200
    }
  }
});



