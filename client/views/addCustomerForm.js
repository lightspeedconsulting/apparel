Template.addCustomerForm.events({
  'click #createNewCustomer': function(e) {
    e.preventDefault();
console.log('clicked')
    var email = $('emailInput').val();
    var firstName = $('firstName').val();
    var lastName = $('lastName').val();

    var attributes = {
      email: email,
      firstName: firstName,
      lastName: lastName
    }
    Meteor.call('createNewCustomer', attributes,
      function(error, attributes) {
      if (error) {
        throwError(error.reason);
        Router.go('customers');
      }

      Session.set("currentCustomer", attributes.customerId);
      Router.go('measurements', {});
    });
  }
})