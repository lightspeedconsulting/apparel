Meteor.methods({
  createNewCustomer: function(attributes) {
    return addCustomer(attributes.firstName, attributes.lastName, attributes.email);
  },

  addMeasurements: function(attributes) {
    customerId = attributes.customerId;
    addMeasurementsToCustomer(customerId, attributes.measurements);
  },

  sendEmail: function(attributes) {
    // TODO: redo the check...
    //check([to, from, subject, text], [String]);

    //Throw error if fields are null

    //Let other method calls from same client start
    //running without waiting for email sending to
    //complete

    var emailObject = buildEmail(attributes.targetEmail, attributes.fromEmail, attributes.customerId, attributes.toBeOrderedArray);

    Email.send(emailObject);

   },
   createNewOrder: function(attributes) {
    return addOrder(attributes.customerId, attributes.styleChoices, attributes.itemType);
   }
});
