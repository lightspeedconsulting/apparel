addCustomer = function(firstName, lastName) {
  return Customers.insert({firstName: firstName,
    lastName: lastName,
    fullName: firstName + ' ' + lastName});
}