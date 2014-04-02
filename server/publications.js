//place publications here
Meteor.publish('customers', function() {
  return Customers.find();
});
