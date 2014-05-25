Meteor.methods({
  createNewCustomer: function(attributes) {
    return addCustomer(attributes.firstName, attributes.lastName, attributes.email);
  },

  addMeasurements: function(attributes) {
    customerId = attributes.customerId;
    addMeasurementsToCustomer(customerId, attributes.measurements);
  },
  addNotes: function(attributes) {
    console.log(attributes);
    check(attributes, {
      customerId: String,
      notes: String
    });
    addNotesToCustomer(attributes.customerId, attributes.notes);
  },
  deleteNotes: function(customerId) {
    check(customerId, String);
    deleteNotesFromCustomer(customerId);
  },

  sendEmail: function(attributes) {
    // TODO: redo the check...
    //check([to, from, subject, text], [String]);

    //Throw error if fields are null

    //Let other method calls from same client start
    //running without waiting for email sending to
    //complete


    Emails.update(attributes.emailId, {$set: {orderNotes: attributes.orderNotes}});
    var email = Emails.findOne(attributes.emailId);
    Email.send(email);
   },
   buildEmailForReview: function(attributes) {
    return buildEmail(attributes.targetEmail, attributes.fromEmail, attributes.customerId, attributes.toBeOrderedArray);

  },
   createNewOrder: function(customerId) {
    return addOrder(customerId);
   },
   updateCurrentOrder: function(attributes) {
    if(attributes.orderId && attributes.styleChoices && attributes.itemType) {
      return updateOrder(attributes.orderId,attributes.styleChoices, attributes.itemType);
    }
    throw new Meteor.Error(400, 'Item Incomplete')
   },
   removeImage: function(imageId) {
    return removeSingleImage(imageId);
   }
});
