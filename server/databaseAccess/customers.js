addCustomer = function(firstName, lastName, email) {
  return Customers.insert({firstName: firstName,
    lastName: lastName,
    email: email,
    fullName: firstName + ' ' + lastName});
};

addMeasurementsToCustomer = function(customerId, measurementsHash) {

  currentMeasurements = Customers.findOne(customerId).measurements;
  newMeasurements = measurementsHash;
//console.log(currentMeasurements)
  combinedMeasurements = _.extend({}, currentMeasurements, newMeasurements);
console.log(currentMeasurements)
console.log(newMeasurements)
console.log(combinedMeasurements)
  //TODO: should we always return the updated customer document?
  //Because at the moment we're returning the # of docs updated
  return Customers.update(customerId,
    {$set: { measurements: combinedMeasurements } } );
};
getCustomerMeasurements = function(customerId) {
  return Customers.findOne({_id: customerId}, {measurements: 1}).measurements
}