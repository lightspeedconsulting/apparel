Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('landing', {path: '/'});
  this.route('customer', {path: '/customer'});
  this.route('measurements', {path: '/measurements'});
});

Router.onBeforeAction(function() { clearErrors(); });