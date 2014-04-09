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
  this.route('pending', {path: '/*'});
});

Router.onBeforeAction(function() { clearErrors(); });
