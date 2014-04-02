addCustomer = function(firstName, lastName, email) {
  return Customers.insert({firstName: firstName,
    lastName: lastName,
    email: email,
    fullName: firstName + ' ' + lastName});
}
