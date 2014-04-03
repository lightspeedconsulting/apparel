Meteor.methods({
  createNewCustomer: function(attributes) {
    return addCustomer(attributes.firstName, attributes.lastName, attributes.email);
  },
  
  addMeasurements:  function(attributes) {
    customerId = attributes.customerId;
    for(var key in attributes.measurements) {
      addMeasurementsToCustomer(customerId, key,
        attributes.measurements[key]);
    }
  }
});
