Template.orders.events({
  'click #reviewOrder': function(e) {
    e.preventDefault();
    targetEmail = $('#targetEmail').val();
    
    //Note: this depends on below event adding the success class
    //to a table row
    if($('.success').length && targetEmail) {
      toBeOrderedArray = [];
      $('.success').each(function(){
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

      Meteor.call('buildEmailForReview', attributes,
        function(error, emailId) {
          if(error) {
            throwError(error.reason, "alert-danger");
            Router.go('order');
          }
          Session.set('emailId', emailId);
          Router.go('review');
          throwError("Review this order", "alert-success");

      });
    } else {
      throwError("Please select an order and fill in an email address!", 
          "alert-danger");
    }
  },

  'click .orderRow.default': function(e) {
    e.preventDefault();
    console.log("Clicked a row");
    var current = e.currentTarget.id;
    $("#" + current).addClass('success').removeClass('default');
  },

  'click .orderRow.success': function(e) {
    e.preventDefault();
    var current = e.currentTarget.id;
    $("#" + current).removeClass('success').addClass('default');
  }
});
Template.orders.activeOrder = function() {
  return Orders.find();
};
