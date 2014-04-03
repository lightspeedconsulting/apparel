Template.layout.currentCustomerName = function() {
  customerId =  Session.get('currentCustomer');

  if(!_.isUndefined(customerId)) {
    return Customers.findOne({_id: customerId}).fullName;
  }
  return '';
};

Template.layout.isCustomerLoggedIn = function() {
  customerLoggedIn = false;
  if(!_.isUndefined(Session.get('currentCustomer'))) {
    customerLoggedIn = true;
  }
  return customerLoggedIn;
};

