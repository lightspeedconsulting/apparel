Meteor.methods({
  createNewCustomer: function(attributes) {
    return addCustomer(attributes.firstName, attributes.lastName, attributes.email);
  },

  addMeasurements:  function(attributes) {
    customerId = attributes.customerId;
    addMeasurementsToCustomer(customerId, attributes.measurements);
  },

  sendEmail: function(to, from, subject, text) {
    check([to, from, subject, text], [String]);

    //Let other method calls from same client start
    //running without waiting for email sending to
    //complete

    console.log("Sending Email");

    //TODO: render template and not display it
    text = text + "<br>" + "<img src='http://yunaapparel.meteor.com/images/shirt.jpg' width='400' height='400' alt='A Shirt'>";

    Email.send({
      to: to,
      from: from,
      subject: subject,
      html: text
    });
   },

   createNewOrder: function(attributes) {
    return addOrder(attributes.customerId, attributes.styleChoices, attributes.itemType);
   }
});
