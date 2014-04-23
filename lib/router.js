Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('landing', {path: '/'});
  this.route('customer', {path: '/customer'});
  this.route('measurements', {path: '/measurements'});
  this.route('shopping', {path: '/shopping'});
  this.route('styleChoices', {
    path: '/styleChoices/:type',
    data: function() { return {type: this.params.type}; }
  });
  this.route('orders', {path: '/orders'});
  this.route('takePicture', {path: '/takePicture'});
  this.route('orders', {path: '/orders'});
  this.route('review', {path: '/review'});
  this.route('pending', {path: '/*'});
});

var requireCustomer = function() {
  if(_.isUndefined(Session.get("currentCustomer"))) {
    Router.go('landing');
    throwError("You must select a customer", "alert-danger");
  }
};


Router.onBeforeAction(requireCustomer,{except: ['landing','orders']} );
Router.onBeforeAction(function() {
  clearErrors();
  Session.set('customerButtonClicked', false)
});
