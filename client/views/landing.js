Template.landing.events({
  'click #getMeasured': function(e) {
    e.preventDefault();
    Router.go('customer', {});
  }

});
