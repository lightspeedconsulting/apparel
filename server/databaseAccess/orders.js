addOrder = function(customerId) {
  currentDate = new Date().toDateString();
  customer = Customers.findOne(customerId);

  measurementsHash = customer.measurements;
  customerName = customer.fullName;

  return Orders.insert({
    customerId: customerId,
    customerName: customerName,
    measurements: measurementsHash,
    orderDate: currentDate
  });
};

updateOrder = function(orderId, styleChoices) {

  return Orders.update(orderId, {$set: {
    itemType: styleChoices.clothingType,
    styleChoices: styleChoices
    }
  });
};
getStyleChoices = function(orderId) {
  return Orders.findOne({_id: orderId}).styleChoices;
};

getOrderItemType = function(orderId) {
  return Orders.findOne({_id: orderId}).itemType;
};

getOrderDate = function(orderId) {
  return Orders.findOne({_id: orderId}).orderDate;
};
