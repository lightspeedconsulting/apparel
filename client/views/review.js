Template.review.emailText = function() {
  return Session.get('emailText');
};

Template.review.events({
  'click #sendEmail': function() {
    e.preventDefault();
    //Grab user input
    targetEmail = $('#targetEmail').val();

    //the empty string "", undefined, and null are all falsy 
    if(targetEmail) {
      toBeOrderedArray = [];
      $('.btn-success').each(function(){
        var input = $(this);
        orderId = input.attr('id');
        toBeOrderedArray.push(orderId);
      });

      attributes = {
        targetEmail: targetEmail,
        toBeOrderedArray: toBeOrderedArray,
        fromEmail: 'tyler.sheffels@gmail.com',
        customerId: Session.get('currentCustomer')
      };

      Meteor.call('sendEmail', attributes,
        function(error, attributes) {
          if(error) {
            throwError(error.reason, "alert-danger");
            Router.go('orders');
          }
          Session.set('emailText', attributes.html);
          Router.go('review');
          throwError("Review this order", "alert-success");
      });
    } else {
      throwError("Please enter an email", "alert-danger");
    }
  },
});
