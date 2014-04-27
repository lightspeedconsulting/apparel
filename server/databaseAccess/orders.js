addOrder = function(customerId, styleChoices, itemType) {
  currentDate = new Date();
  customer = Customers.findOne({_id: customerId}, {measurements: 1, fullName: 1});
  measurementsHash = customer.measurements;
  customerName = customer.fullName;

  return Orders.insert({
    customerId: customerId,
    customerName: customerName,
    itemType: itemType,
    measurements: measurementsHash,
    styleChoices: styleChoices,
    orderDate: currentDate
  });
};

getStyleChoices = function(orderId) {
  return Orders.findOne({_id: orderId}).styleChoices;
};

getOrderItemType = function(orderId) {
  return Orders.findOne({_id: orderId}).itemType;
};

getOrderDate = function(orderId) {
  return Orders.findOne({_id: orderId}).orderDate.toDateString();
};
