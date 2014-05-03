Meteor.subscribe('customers');
Meteor.subscribe('forms');
Meteor.subscribe('errors');
Meteor.subscribe('styleChoices');
Meteor.subscribe('orders');
Meteor.subscribe('images');
Meteor.subscribe('emails');

if(Meteor.isClient) {
  Meteor.startup = function() {
    Session.set('expandedOrderIds', [])
    Session.set('currentCustomer', '')
  }
}