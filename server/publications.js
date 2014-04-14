//place publications here
Meteor.publish('customers', function() {
  return Customers.find();
});

Meteor.publish('forms', function() {
  return Forms.find();
});

Meteor.publish('styleChoices', function() {
  return StyleChoices.find();
});

Meteor.publish('orders', function() {
  return Orders.find();
});

Meteor.publish('images', function() {
  return Images.find();
});
