Meteor.subscribe('customers');
Meteor.subscribe('forms');
Meteor.subscribe('errors');
Meteor.subscribe('styleChoices');

if ( Meteor.is_client ) {
    Meteor.startup(function () {
        Session.set('currentCustomer', undefined);
    });
}