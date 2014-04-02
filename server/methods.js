Meteor.methods({
  createNewCustomer: function(attributes) {
    return addCustomer(attributes.firstName, attributes.lastName, attributes.email);
  }
})