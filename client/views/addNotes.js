var sendNotes = function(notes) {

    var attributes = {
      customerId: Session.get('currentCustomer'),
      notes: notes
    };

    Meteor.call('addNotes', attributes, function(error, response) {
        if(error) {
          throwError(error.reason, "alert-danger");
          Router.go('addNotes');
        }
        throwError("Notes added", "alert-success");
        Router.go('landing');

    });
};

Template.addNotes.helpers({
  'customerNotes': function() {
    var customerId = Session.get('currentCustomer'); 
    return Customers.findOne(customerId).notes;
  }
});

Template.addNotes.events({
  'click #addNotes': function(e) {
    e.preventDefault();
    var notes = $("#customerNotes").val();
    sendNotes(notes);
  },

  'click #deleteNotes': function(e) {
    e.preventDefault();
    var customerId = Session.get('currentCustomer');

    Meteor.call('deleteNotes', customerId, 
      function(error, response) {
        if(error) {
          throwError(error.reason, "alert-danger");
          Router.go('addNotes');
        }
        throwError("Notes deleted", "alert-success");
        Router.go('addNotes');

    });
  }
});
