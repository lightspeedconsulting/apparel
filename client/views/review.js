Template.review.emailText = function() {
  var email = Emails.findOne(Session.get('emailId'));
  return email.safeHtml;
};

Template.review.events({
  'click #sendEmail': function(e) {
    e.preventDefault();
    //Grab user input

    var attributes = {
      emailId: Session.get('emailId'),
      orderNotes: $('#orderNotes').val()
    };

    //the empty string "", undefined, and null are all falsy 
    Meteor.call('sendEmail', attributes,
        function(error) {
          if(error) {
            throwError(error.reason, "alert-danger");
            Router.go('landing');
          }
          Router.go('landing');
          throwError("Order sent successfully", "alert-success");
      });
  },
});
