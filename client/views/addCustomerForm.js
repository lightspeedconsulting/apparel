Template.addCustomerForm.events({
  'click #createNewCustomer': function(e) {
    e.preventDefault();

    var email = $('#emailInput').val();
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();

    var attributes = {
      email: email,
      firstName: firstName,
      lastName: lastName
    };
    Meteor.call('createNewCustomer', attributes,
      function(error, customerId) {
      if (error) {
        throwError(error.reason);
        Router.go('customers');
      }

      console.log(customerId);
      Session.set("currentCustomer", customerId);
      Session.set("customerButtonClicked", false);
      $('#customerSearch').val("");
      Session.set('searchQuery', "");
    });
  }
});
