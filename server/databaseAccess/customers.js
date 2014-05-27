addCustomer = function(firstName, lastName, email) {
  return Customers.insert({firstName: firstName,
    lastName: lastName,
    email: email,
    fullName: firstName + ' ' + lastName});
};

addMeasurementsToCustomer = function(customerId, measurementsHash) {


  //TODO: should we always return the updated customer document?
  //Because at the moment we're returning the # of docs updated
  return Customers.update(customerId,
    {$set: { measurements: measurementsHash } } );
};
getCustomerMeasurements = function(customerId) {
  return Customers.findOne({_id: customerId}, {measurements: 1}).measurements;
};

addNotesToCustomer = function(customerId, notes) {
  return Customers.update(customerId, {$set: { notes: notes } } );
};

deleteNotesFromCustomer = function(customerId) {
   return Customers.update(customerId, {$set: { notes: null } } );
};
