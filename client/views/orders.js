Template.orders.events({
  'click #reviewOrder': function(e) {
    e.preventDefault();
    targetEmail = $('#targetEmail').val();
    
    //Note: this depends on below event adding the btn-success class
    if($('.btn-success').length && targetEmail) {
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

  'click .active-order.btn-default': function(e) {
    e.preventDefault();
    var current = e.currentTarget.id;
    $("#" + current).addClass('btn-success').removeClass('btn-default');
  },

  'click .active-order.btn-success': function(e) {
    e.preventDefault();
    var current = e.currentTarget.id;
    $("#" + current).addClass('btn-default').removeClass('btn-success');
  }
});
Template.orders.activeOrder = function() {
  return Orders.find();
};
