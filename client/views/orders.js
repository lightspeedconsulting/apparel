Template.orders.events({
  'click #reviewOrder': function(e) {
    e.preventDefault();
    //Checking to see if any orders selected
    //Note: this depends on below event adding the btn-success class
    if($('.btn-success').length) {
      Router.go('review');
    } else {
      throwError("No Order Selected!", "alert-danger");
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
