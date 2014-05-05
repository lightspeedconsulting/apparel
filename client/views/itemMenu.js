Template.itemMenu.events({
  'click #addItem': function(e) {
    e.preventDefault();
    sc = Session.get('styleChoiceHash');
    cId = Session.get('currentCustomer');

    attributes = {
      customerId: cId,
      styleChoices: sc,
      itemType: this.type
    };

    Meteor.call('createNewOrder', attributes, function(error, attributes) {
      if(error) {
        throwError(error.reason, "alert-danger");
        Router.go('itemMenu/' + this.type);
      }

      Router.go('landing');
      throwError("Style options successfully submitted", "alert-success");
    });
  }
});
