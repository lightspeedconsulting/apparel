Template.orders.events({
  'click #sendEmail': function(e) {
    e.preventDefault();

    //Grab user input
    targetEmail = $('#targetEmail').val();
    toBeOrderedArray = []
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
    }

    Meteor.call('sendEmail', attributes);
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
}
