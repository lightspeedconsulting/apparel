addCustomer = function(firstName, lastName, email) {
  return Customers.insert({firstName: firstName,
    lastName: lastName,
    email: email,
    fullName: firstName + ' ' + lastName});
};

addMeasurementsToCustomer = function(customerId, measurementName, 
  measurementValue) {
  //TODO: should we always return the updated customer document?
  //Because at the moment we're returning the # of docs updated
  measurement = {};
  measurement[measurementName] = measurementValue;
  return Customers.update(customerId, 
    {$set: measurement});  
};
