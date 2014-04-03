Template.layout.currentCustomerName = function() {
  customerId =  Session.get('currentCustomer');

  if(!_.isUndefined(customerId)) {
    return Customers.findOne({_id: customerId}).fullName;
  }
  return '';
};

