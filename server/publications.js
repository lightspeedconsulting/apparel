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

//TODO: this may not be scalable, should probably limit by customer or top 100?
Meteor.publish('images', function() {
  return Images.find();
});

Meteor.publish('emails', function() {
  return Emails.find();
});
