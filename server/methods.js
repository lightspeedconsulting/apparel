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

    //Let other method calls from same client start
    //running without waiting for email sending to
    //complete

    console.log(attributes);

    // Email.send({
    //   to: to,
    //   from: from,
    //   subject: subject,
    //   html: text
    // });
   },
   createNewOrder: function(attributes) {
    return addOrder(attributes.customerId, attributes.styleChoices, attributes.itemType);
   }
});
