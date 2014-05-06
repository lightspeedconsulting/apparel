Template.itemMenu.events({
  'click #addItem': function(e) {
    e.preventDefault();
    sc = Session.get('styleChoiceHash');
    orderId = Session.get('itemId');

    attributes = {
      orderId: orderId,
      styleChoices: sc,
      itemType: Session.get('clothingType'),
    };

    Meteor.call('updateCurrentOrder', attributes, function(error, attributes) {
      if(error) {
        throwError(error.reason, "alert-danger");
        Router.go('itemMenu/' + this.type);
      }

      Router.go('landing');
      throwError("Style options successfully submitted", "alert-success");
    });
  }
});
