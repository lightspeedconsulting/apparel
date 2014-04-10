Template.orders.events({
  'click #sendEmail': function(e) {
    e.preventDefault();
    
    //Grab user input
   targetEmail = $('#targetEmail').val();

    Meteor.call('sendEmail',
      targetEmail,
      'duncanrenfrow@gmail.com',
      "Hello from Meteor",
      "We got email working"
    );
  }
}); 
