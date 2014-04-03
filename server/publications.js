//place publications here
Meteor.publish('customers', function() {
  return Customers.find();
});

Meteor.publish('forms', function() {
  return Forms.find();
});
