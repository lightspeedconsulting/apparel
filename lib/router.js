Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('landing', {path: '/'});
  this.route('customer', {path: '/customer'});
  this.route('measurements', {path: '/measurements'});
  this.route('pending', {path: '/pending'});
});

Router.onBeforeAction(function() { clearErrors(); });